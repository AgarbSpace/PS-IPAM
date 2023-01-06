import { useState } from "react";
import { store } from "../app/store";
import { useFetchDistrictInfosQuery } from "../features/StatesApi/statesApiSlice";
import { Div, Input, Results, Strong } from './styled';

export default function DistrictInfos() {
	const [ search, setSearch ] = useState<string>('');
	const districtInfo = useFetchDistrictInfosQuery(store.getState().districts.value);
	let districtInfoArray = districtInfo.data;

	function handleInputChange(e: any) {
		setSearch(e.target.value);
	}

	if (search.length > 0) {
		districtInfoArray = districtInfo.data.filter((district: any) =>
			district.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(search.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
		);
	}

	return <>
		{districtInfo.data === undefined ? <div>carregando</div> :
			<>
				<Input placeholder="Pesquise por nome" onChange={handleInputChange} />
				<Results>{districtInfoArray.length} Resultado(s) encontrados</Results>
				{districtInfoArray.map((info: any) => <Div key={info.id}>
					<span><Strong>{info.nome}</Strong></span>
					<span>Municipio: {info.municipio.nome}</span>
					<span>Microrregiao: {info.municipio.microrregiao.nome}</span>
					<span>Mesorregiao: {info.municipio.microrregiao.mesorregiao.nome}</span>
					<span>UF: {info.municipio.microrregiao.mesorregiao.UF.nome}</span>
					<span>Regiao: {info.municipio.microrregiao.mesorregiao.UF.regiao.nome} - {info.municipio.microrregiao.mesorregiao.UF.regiao.sigla}</span>
					<span>Regiao-Imediata: {info.municipio['regiao-imediata'].nome} </span>
					<span>Regiao-Intermediaria: {info.municipio['regiao-imediata']['regiao-intermediaria'].nome} -
						{info.municipio['regiao-imediata']['regiao-intermediaria'].UF.sigla}</span>
				</Div>)}
			</>
		}
		</>
}