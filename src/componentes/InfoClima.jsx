import React from "react";
import Span from "./span";
import EstatisticasClima from "./EstatisticasClima";

const InfoClima = ({ dadosClima }) => {
  const formatLetter = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="w-full flex justify-center pt-[60px]">
      {dadosClima && dadosClima !== "" && (
        <div className="w-[620px] h-[250px]  shadow-xl bg-[rgba(255,255,255,0.05)] rounded-lg p-[15px] md:h-[290px] md:p[18px]">
          <h4 className="text-white font-semibold text-md">
            {dadosClima.name}
          </h4>
          <div className="flex items-center gap-2 md:gap-3">
            <span>
              <img
                className="w-[90px]"
                src={`http://openweathermap.org/img/wn/${dadosClima.weather[0].icon}.png`}
                alt=""
              />
            </span>
            <span className="text-[60px] text-white font-semibold ">
              {`${dadosClima.main.temp.toFixed()}`}
              <sup className="text-[35px] mt-[10px] font-normal">°C</sup>
            </span>
            <div className="ml-[15px] md:ml-[28px]">
              <span className="text-lg text-white font-semibold ">
                {" "}
                {formatLetter(dadosClima.weather[0].description)}
              </span>
              <p className="text-sm text-white font-semibold">
                Sensação térmica
                <span className=" ml-1">{`${dadosClima.main.feels_like.toFixed()}°`}</span>
              </p>
            </div>
          </div>
          <div className="mt-[15px] ml-3 md:mt-[20px]">
            <p className="text-md text-white md:text-lg">
              {formatLetter(dadosClima.weather[0].description)}. A mímina será
              de {`${dadosClima.main.temp_min.toFixed()}°`}
            </p>
          </div>
          <div className="flex mt-[15px] gap-[22px] ml-[12px] md:mt-6 md:gap-[60px] md:ml-4">
            <div>
              <Span>Vento</Span>
              <EstatisticasClima>{`${(
                dadosClima.wind.speed * 3.6
              ).toFixed()} km/h`}</EstatisticasClima>
            </div>
            <div>
              <Span>Umidade</Span>
              <EstatisticasClima>{`${dadosClima.main.humidity}%`}</EstatisticasClima>
            </div>
            <div>
              <Span>Visibilidade</Span>
              <EstatisticasClima>{`${(
                dadosClima.visibility / 1000
              ).toFixed()} km`}</EstatisticasClima>
            </div>
            <div>
              <Span>Pressão</Span>
              <EstatisticasClima>{`${dadosClima.main.pressure} mb`}</EstatisticasClima>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoClima;
