import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import { Contract } from "ethers";
import { CONTRACT_ADDRESS, abi } from "../constants";
import { useRouter } from 'next/router';

export default function home(props) {
    const { getProviderOrSigner } = props;

    const [loading, setLoading] = useState(false);

    const [load, setLoad] = useState(false);

    const [candidateList, setCandidateList] = useState([]);

    const [thanks, setThanks] = useState(false);

    const router = useRouter();

    const [votes, setVotes] = useState([]);

    const getCandidateList = async (id) => {
        try {
            const signer = await getProviderOrSigner(true);

            const votingContract = new Contract(
                CONTRACT_ADDRESS,
                abi,
                signer
            );

            setLoading(true);

            const tx = await votingContract.getCandidateList(id);

            setLoading(false);

            setCandidateList(tx);

            setLoad(true);

        } catch (error) {
            console.log(error)
        }
    }

    const voteCandidate = async (id) => {
        try {
            const signer = await getProviderOrSigner(true);

            const votingContract = new Contract(
                CONTRACT_ADDRESS,
                abi,
                signer
            );

            setLoading(true);

            const tx = await votingContract.vote(BigInt(id), parseInt(localStorage.getItem('voterID')), parseInt(new Date().getTime()));

            await tx.wait(1);

            setLoading(false);

            setLoad(false);

            localStorage.setItem('voted', 'true');

            setThanks(true);

        } catch (error) {
            console.log(error)
            setLoading(false);
        }
    }

    const getVoteCounts = async () => {
        try {
            const signer = await getProviderOrSigner(true);

            const votingContract = new Contract(
                CONTRACT_ADDRESS,
                abi,
                signer
            );

            setLoading(true);

            const tx2 = await votingContract.getVoteCounts();

            setLoading(false);

            setVotes(tx2);

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {

        if (!localStorage.getItem('voterID')) {
            router.push('/voter')
            return;
        }

        if (localStorage.getItem('voted') === 'true') {
            getVoteCounts();
            setThanks(true);
        }
        else {
            getCandidateList(localStorage.getItem('voterID'))
        }
    }, [])

    const render = () => {
        if (loading) {
            return <label> Loading..... </label>
        }
    }

    const print = () => {
        if (load) {
            return (
                <div className='container'>
                    <table className="table table-striped table-hover">
                        <tbody>
                            {candidateList.map(candidateList => {
                                return (
                                    <tr key={candidateList.nominationNo}>
                                        <td> {candidateList.name} </td>
                                        <td> {(candidateList.voteCount).toString()} </td>
                                        <td><button className={styles.button} onClick={() => voteCandidate(candidateList.nominationNo)} > Vote </button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            )
        }
    }

    const thankyou = () => {
        if (thanks) {
            return (
                <div className='container'>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Party</th>
                                <th>Vote Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {votes.map(votes => {
                                return (
                                    <tr key={votes.name}>
                                        <td>{votes.name}</td>
                                        <td>{votes.party}</td>
                                        <td>{(votes.votes).toString()}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <h3 className='text-center'>You have already voted. Thank you! </h3>
                </div>
            );
        }
    }

    const logout = () => {
        localStorage.removeItem('voterID');
        localStorage.removeItem('voted');
        router.push('/voter');
    }

    return (
        <div className='container'>
            <h1 className='text-center mt-3'>Election Result</h1>
            {print()}
            {render()}
            {thankyou()}

            <button className='btn btn-primary' onClick={logout}> Log out </button>
        </div>
    );
}