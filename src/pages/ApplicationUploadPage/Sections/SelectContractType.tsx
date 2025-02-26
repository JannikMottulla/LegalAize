import { Button } from "../../../components/ui/button";
import useContractUploadStore from "../../../stores/ContractStore";
import { useUiControlStore } from "../../../stores/UiControlStore";
import { SearchableSelect } from "../../../components/SearchableSelect";

const contractTypes = [
  "Kaufvertrag",
  "Mietvertrag",
  "Leasingvertrag",
  "Pachtvertrag",
  "Darlehensvertrag",
  "Schenkungsvertrag",
  "Werkvertrag",
  "Dienstvertrag",
  "Arbeitsvertrag",
  "Aufhebungsvertrag",
  "Bauvertrag",
  "Maklervertrag",
  "Beförderungsvertrag",
  "Transportvertrag",
  "Speditionsvertrag",
  "Versicherungsvertrag",
  "Unterhaltsvertrag",
  "Betreuungsvertrag",
  "Beteiligungsvertrag",
  "Vergleichsvertrag",
  "Gesellschaftsvertrag",
  "Geschäftsführervertrag",
  "Franchisevertrag",
  "Lizenzvertrag",
  "Kooperationsvertrag",
  "Geheimhaltungsvertrag",
  "Vertriebsvertrag",
  "Agenturvertrag",
  "Kommissionsvertrag",
  "Rahmenvertrag",
  "Kreditvertrag",
  "Bürgschaftsvertrag",
  "Factoringvertrag",
  "Treuhandvertrag",
  "Ratenzahlungsvertrag",
  "Hypothekenvertrag",
  "Softwarelizenzvertrag",
  "Hostingvertrag",
  "Cloud-Service-Vertrag",
  "Support- und Wartungsvertrag",
  "IT-Outsourcing-Vertrag",
  "Behandlungsvertrag",
  "Pflegevertrag",
  "Heimvertrag",
  "Therapievertrag",
  "Ehevertrag",
  "Erbvertrag",
  "Testamentsvollstreckervertrag",
  "Auftragsvertrag",
  "Sponsoringvertrag",
  "Krankenversicherung",
  "Haftpflichtversicherung",
  "Lebensversicherung",
  "Berufsunfähigkeitsversicherung",
  "Rentenversicherung",
  "Kfz-Versicherung",
  "Hausratversicherung",
  "Rechtsschutzversicherung",
  "Unfallversicherung",
  "Gebäudeversicherung",
  "Reiseversicherung",
  "Pflegeversicherung",
  "Zahnzusatzversicherung",
  "Tierversicherung",
  "Photovoltaikversicherung",
  "Cyberversicherung",
  "D&O-Versicherung",
  "Transportversicherung",
  "Maschinenversicherung",
  "Technische Versicherung",
  "Bauleistungsversicherung",
  "Betriebshaftpflichtversicherung",
  "Produkthaftpflichtversicherung",
  "Umwelthaftpflichtversicherung",
  "Betriebsunterbrechungsversicherung",
  "Kreditversicherung",
  "Kautionsversicherung",
  "Filmversicherung",
  "Musikinstrumentenversicherung",
  "Jagdhaftpflichtversicherung",
  "Gewerbeversicherung",
  "Elektronikversicherung",
  "Mietnomadenversicherung",
  "Versicherung gegen Elementarschäden",
  "Flottenversicherung",
  "Warenkreditversicherung",
  "Glasversicherung",
  "Handyversicherung",
  "Wertsachenversicherung",
];

const SelectContractType = () => {
  const { setContractType, contractType } = useContractUploadStore();
  const { setStep } = useUiControlStore();

  return (
    <div className="w-full flex flex-col items-center space-y-4">
      <div className="">
        <h2 className="text-2xl font-semibold">Select Contract Type</h2>
        <p className="text-[#7E69AB] text-sm">
          Chose the type of your Contract.
        </p>
      </div>
      <SearchableSelect
        options={contractTypes}
        value={contractType}
        onChange={setContractType}
      />
      <p className="text-[#7E69AB] text-sm">
        Chose the type of your Contract. Cannot find your contract?{" "}
        <a>Click here</a>
      </p>
      <Button
        className="mt-8 w-full max-w-xs bg-[#D6BCFA] text-[#2D3348]"
        disabled={!contractType}
        onClick={() => setStep(3)}
      >
        Next
      </Button>
    </div>
  );
};

export default SelectContractType;
