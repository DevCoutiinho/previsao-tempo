import React from "react";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import InfoClima from "./componentes/InfoClima";

const App = () => {
  const [dadosClima, setDadosClima] = useState("");
  const [nomeCidade, setNomeCidade] = useState("");

  const onSearchClick = async () => {
    if(nomeCidade === ""){
      return alert("Preencha o nome da cidade primeiro.")
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${nomeCidade},BR&appid=0d50fad3b10038350f1e1ccea8c4e739&units=metric&lang=pt_br`;
    const new_response = await fetch(url);
    const new_dados = await new_response.json();
    setDadosClima(new_dados);
    console.log(new_dados);
    setNomeCidade("");
  };

  useEffect(() => {
    async function getDados() {
      const url =
        "https://api.openweathermap.org/data/2.5/weather?q=Salvador,BR&appid=0d50fad3b10038350f1e1ccea8c4e739&units=metric&lang=pt_br";
      const response = await fetch(url);
      const dados = await response.json();
      setDadosClima(dados);
    }
    getDados();
  }, []);

  const handleChange = (e) => {
    setNomeCidade(e.target.value);
  };

  return (
    <div className=" w-full h-screen  bg-linear-to-t from-indigo-400 to-blue-900">
      <div className="flex gap-[30px]  items-center justify-center pt-[25px] pb-[20px] bg-blue-950">
        <div className="bg-gray-700 border w-[281px] h-[50px] p-[20px] flex  justify-between rounded-xl border-white items-center ">
          <input
            className="w-[140px] text-base text-white font-bold outline-none "
            type="text"
            placeholder="Pesquisar por local"
            value={nomeCidade}
            onChange={handleChange}
          />
          <button onClick={onSearchClick} className="cursor-pointer text-white">
            <Search size={20} />
          </button>
        </div>
        {dadosClima?.main && (
          <div className="hidden bg-gray-700 border w-[230px] h-[50px] pt-[8px] pl-[18px] rounded-xl border-white md:block">
            <div className="flex items-center gap-[10px] ">
              <span className="text-base text-white font-bold">
                {dadosClima.name}
              </span>
              <span className="">
                <img
                  className="w-[31px] "
                  src={`http://openweathermap.org/img/wn/${dadosClima.weather[0].icon}.png `}
                  alt="Image do sol"
                />
              </span>
              <span className="text-base text-white font-bold">{`${dadosClima.main.temp.toFixed()}°`}</span>
            </div>
          </div>
        )}
      </div>
      <InfoClima dadosClima={dadosClima} />
    </div>
  );
};

export default App;
