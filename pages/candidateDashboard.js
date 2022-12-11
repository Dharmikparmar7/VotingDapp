import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import { Contract } from "ethers";
import { CONTRACT_ADDRESS, abi } from "../constants";
import { useRouter } from 'next/router';

export default function Home(props) {

    const { getProviderOrSigner } = props;

    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const [candidate, setCandidate] = useState(
        {
            "nominationNo": 0,
            "voteCount": 0,
            "name": "",
            "party": "",
            "stateCode": "",
            "constituencyCode": "",
            "password": ""
        }
    );

    const [votes, setVotes] = useState([]);

    const getCandidate = async () => {
        try {
            const signer = await getProviderOrSigner(true);

            const votingContract = new Contract(
                CONTRACT_ADDRESS,
                abi,
                signer
            );

            setLoading(true);

            const tx2 = await votingContract.getVoteCounts();

            const tx = await votingContract.getCandidate(parseInt(localStorage.getItem('candidateID')));

            setLoading(false);

            setCandidate(tx);

            setVotes(tx2);

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const logout = () => {
        localStorage.removeItem('candidateID');
        router.push('/candidate');
    }

    useEffect(() => {
        if (!localStorage.getItem('candidateID')) {
            router.push('/candidate')
            return;
        }

        getCandidate()
    }, [])

    const render = () => {
        if (loading) {
            return <label> Loading..... </label>
        }
    }

    return (
        <>
            <div className='container'>
            <h1 className='text-center mt-3'>Election Result</h1>
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
                <h2 className='text-center mt-5'>Candidate Details</h2>
                <table className="table table-striped table-hover">
                    <tbody>
                        <tr>
                            <td>Nomination No.</td>
                            <td>{(candidate.nominationNo).toString()}</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{candidate.name}</td>
                        </tr>
                        <tr>
                            <td>Party</td>
                            <td>{candidate.party}</td>
                        </tr>
                        <tr>
                            <td>State Code</td>
                            <td>{candidate.stateCode}</td>
                        </tr>
                        <tr>
                            <td>Constituency Code</td>
                            <td>{candidate.constituencyCode}</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                {render()}
                <br />
                <button className='btn btn-primary' onClick={logout}> Log out </button>
            </div>
        </>
    )
}