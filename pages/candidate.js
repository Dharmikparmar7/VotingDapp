import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import { Contract } from "ethers";
import { CONTRACT_ADDRESS, abi } from "../constants";
import { useRouter } from 'next/router';

export default function Candidate(props) {

  const { getProviderOrSigner } = props;

  const [toggleForm, setToggleForm] = useState('login');

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const [candidateRegistrationValues, setCandidateRegistrationValues] = useState(
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

  const [candidateLoginValues, setCandidateLoginValues] = useState(
    {
      "id": 0,
      "password": ""
    }
  );

  function handleRegisterValueChange(e) {
    setCandidateRegistrationValues({
      ...candidateRegistrationValues,
      [e.target.name]: e.target.value
    });
  }

  function handleLoginValueChange(e) {
    setCandidateLoginValues({
      ...candidateLoginValues,
      [e.target.name]: e.target.value
    });
  }

  const candidateRegistration = async (event) => {
    event.preventDefault();

    try {
      const signer = await getProviderOrSigner(true);

      const votingContract = new Contract(
        CONTRACT_ADDRESS,
        abi,
        signer
      );

      setLoading(true);

      const tx = await votingContract.registerCandidate(candidateRegistrationValues);

      await tx.wait(1);

      setLoading(false);

      router.push('/candidate');

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const candidateLogin = async (event) => {
    event.preventDefault();

    try {
      const signer = await getProviderOrSigner(true);

      const votingContract = new Contract(
        CONTRACT_ADDRESS,
        abi,
        signer
      );

      setLoading(true);

      const tx = await votingContract.loginCandidate(candidateLoginValues.id, candidateLoginValues.password);

      setLoading(false);

      localStorage.setItem('candidateID', BigInt(tx._candidate.nominationNo));

      if (tx.login) router.push('/candidateDashboard');

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const render = () => {
    if (loading) {
      return <label> Loading..... </label>
    }
  }

  const switchVoter = () => {
    router.push('/voter');
  }

  return (
    <div className="styles.main">
      <div className={styles.container}>
        <div className={styles.devideTwo} style={{
          display: (toggleForm == "login") ? "none" : "flex",
        }}>
          <h1 className={styles.h1}>Candidate Registration </h1>
          <form className={styles.form} onSubmit={candidateRegistration}>
            <input className={styles.input} id="name" name="name" placeholder='Name' type="text" onChange={handleRegisterValueChange} />
            <input className={styles.input} id="party" name="party" placeholder='Party' type="text" onChange={handleRegisterValueChange} />
            <input className={styles.input} id="nominationNo" name="nominationNo" placeholder='Phone No' type="text" onChange={handleRegisterValueChange} />
            <input className={styles.input} id="stateCode" name="stateCode" placeholder='State Code' type="text" onChange={handleRegisterValueChange} />
            <input className={styles.input} id="constituencyCode" name="constituencyCode" placeholder='Constituency Code' type="text" onChange={handleRegisterValueChange} />
            <input className={styles.input} id="password" name="password" placeholder='Password' type="password" onChange={handleRegisterValueChange} />
            <button className={styles.button} type='submit'> Register </button>
            <button className={`${styles.button} ${styles.buttonBordered}`} onClick={(e) => { e.preventDefault(); setToggleForm('login'); }}> Login </button>
          </form>

        </div>

        <div className={styles.devideTwo} style={{
          display: (toggleForm == "register") ? "none" : "flex",
        }}>
          <h1 className={styles.h1}>Candidate Login </h1>
          <form className={styles.form} onSubmit={candidateLogin}>
            <input className={styles.input} id="id" name="id" placeholder='ID' type="text" onChange={handleLoginValueChange} />
            <input className={styles.input} id="password" name="password" placeholder='Password' type="password" onChange={handleLoginValueChange} />
            <button className={styles.button} type='submit'> Login </button>
            <button className={`${styles.button} ${styles.buttonBordered}`} onClick={(e) => { e.preventDefault(); setToggleForm('register'); }}> Register </button>
            <button className={`${styles.button} ${styles.buttonBordered}`} onClick={switchVoter}> Go to Voter </button>
          </form>
        </div>

        {render()}<br />
      </div>
    </div>
  )
}