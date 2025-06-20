import Certificate from "../components/ui/Certificate";
const Certificates = () => {
    useEffect(() => {
    document.title = "Certificates | Sadaf Shahab Portfolio";
  }, []);
  return (
    <div>
      <Certificate />
    </div>
  );
};

export default Certificates;
