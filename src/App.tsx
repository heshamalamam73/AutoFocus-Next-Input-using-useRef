import "./styles.css";
import Input from "./components/Input";
import { useRef, useEffect } from "react";

export default function App() {
  const firstNameRef = useRef<HTMLElement | null>(null);
  const lastNameRef = useRef<HTMLElement | null>(null);
  const submitRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (firstNameRef.current) {
      firstNameRef.current.focus();
    }
  }, []);
  const onFirstNameKeyDown = (e: any) => {
    if (e.key === "Enter" && lastNameRef.current) {
      lastNameRef.current.focus();
    }
  };

  const onLastNameKeyDown = (e: any) => {
    if (e.key === "Enter" && submitRef.current) {
      submitRef.current.focus();
    }
  };

  const onSubmitKeyDown = (e: any) => {
    if (e.key === "Enter" && submitRef.current) {
      alert("submited");
    }
  };
  return (
    <div className="App">
      <h1>React Form AutoFocus With UseRef </h1>
      <Input
        ref={firstNameRef}
        type="text"
        onKeyDown={onFirstNameKeyDown}
        placeholder="firstName"
      />
      <Input
        ref={lastNameRef}
        type="text"
        onKeyDown={onLastNameKeyDown}
        placeholder="firstName"
      />
      <Input ref={submitRef} type="submit" onKeyDown={onSubmitKeyDown} />
    </div>
  );
}
