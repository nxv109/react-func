import NestedLayout from '../../components/nestedLayout';

export default function Step1({ handlePhoneNum, phoneNum }) {
  const handleChange = (e) => {
    handlePhoneNum(e.target.value)
  }

  return (
    <>
      <h1>Step1</h1>
      <input type="text" name="phoneNumber" value={phoneNum} onChange={handleChange} />
    </>
  );
}

Step1.Layout = NestedLayout;
