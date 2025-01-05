import React from 'react';

const KeyFacts: React.FC = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Key Facts:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Primary Schools in Badagry (Central) Local Government</h3>
          <ul className="list-disc pl-5 space-y-1">
            {[
              "L. A Pry school Alakranlumo",
              "L. A Pry school Varfin",
              "L. A Pry school Badagry",
              "L. A Pry school Keta-West",
              "L. A Pry school Topo/Idale",
              "Methodist Pry school Tohon",
              "Methodist Pry school Ajido",
              "Saint Leo Pry school Bagoje - Zebbe",
              "St. Patrick Pry school Irogbo/Iragon",
              "L. A Pry school Ijotun",
              "L. A Pry school Ajara",
              "Sea-Beach Pry school Ajido",
              "Sea-Beach Pry school Ajido",
              "St. Thomas Pry school Badagry",
              "Arser-Udenu Primary school Badagry",
              "Ghenpro Primary school 1 Ajara",
              "Ghenpro Primary school 2 Ajara",
              "Anglican Primary school Igborsun",
              "Anglican primary school 2 Igborsun",
              "Methodist primary school Badagry",
              "Anglican Pry Sch - Aradagun/Mosafejo",
              "Anglican Pry Sch - Gbanko",
              "Anglican Pry Sch - Lade",
              "Anglican Pry Sch - Imeke",
              "Anglican Pry Sch - Toga Zamu",
              "Anglican Pry Sch - Ilogbo - Eremi",
              "Anglican Pry Sch - Toga Zamu",
              "ADS Pry Sch 1 - Araromi-Ale",
              "ADS Pry Sch 2 - Araromi-Ale",
              "ADS Pry Sch 3 - Araromi-Ale",
              "Community Pry Sch - Esepe",
              "Epeme Pry Sch - Epe",
              "L.A Pry Sch - Ibereko",
              "L.A Pry Sch - Ipara",
              "L.A Pry Sch - Mowo-Agemowo",
              "L.A Pry Sch - Okologbo",
              "Morogbo Pry Sch - Morogbo",
              "M.M.C - Mowo-Ajido",
              "O.L.A Pry Sch - Ojoigun",
              "Salvation Army Pry Sch - Ibiye",
              "Salvation Army Pry Sch - Iroti",
              "Salvation Army Pry Sch - Logbo-Eremi",
              "Salvation Army Pry Sch - Zunve",
              "Methodist Pry Sch - Imeke, Welcome Farasimi Road.",
              "Methodist Pry School - Kweme",
              "Methodist Pry School - Sawa",
              "Our Lady of Fatima Pry Sch. - Ganyingbo",
              "St. Peter Catholic Pry Sch. - Agorin Sea Beach.",
              "Salvation Army Pry Sch. - Anglo Boglo",
              "Methodist Pry School - Ashijanu"
            ].map((school, index) => (
              <li key={index} className="transition-transform transform hover:scale-105">
                {school}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Primary Health Centres Badagry Local Government and Locations</h3>
          <ul className="list-disc pl-5 space-y-1">
            {[
              "Ajara Topa PHC - Ajara Topa Badagry",
              "Ajara flagship PHC - Ajara Ijada Badagry",
              "Ajido PHC - Ebute Offin Ajido",
              "Akarakumo PHC - Akarakumo-Povia, Ajido road",
              "Gberefu PHC - Gberefu Sea-Beach Badagry",
              "Ilogbo/Iragon health post - Irogbo/Iragon, Badagry",
              "Iropo/Agon health post - Iropo/Agon, Badagry",
              "Mogohoto PHC - Mogohoto Community Badagry",
              "Mowo PHC - Ikoga Road Mowo Badagry",
              "Araromi PHC - Ile-epo Bus Stop, Badagry Express Way",
              "Morogbo PHC - Morogbo, Car Wash Bus Stop, Agbara",
              "Ibereko PHC - Opposite Ilogbo Eremi Market, Ilogbo Badagry",
              "Isamohe PHC - Isamohe Village, Ilogbo Badagry",
              "Mowo PHC - Maruwa Bus Stop, Badagry",
              "Medical Portacabin PHC - Iworo Extension, Iworo Badagry",
              "Obepe PHC - Iworo Extension, Iworo Badagry",
              "Sakpo PHC - Sakpo Sea Beach, Seme Expressway, Badagry.",
              "Ajara PHC - Ajara, Opposite Apa Palace Way, Badagry.",
              "Seme PHC - Custom Quarters, Seme, Badagry.",
              "Igbogbele PHC - Igbogbele Village, Owode Apa Road, Badagry."
            ].map((center, index) => (
              <li key={index} className="transition-transform transform hover:scale-105">
                {center}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KeyFacts;
