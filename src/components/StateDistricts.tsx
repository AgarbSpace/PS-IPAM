import { useAppDispatch } from "../app/hooks";
import { store } from "../app/store";
import { districtSelected } from "../features/states/districtsSlice";
import { useFetchDistrictQuery } from "../features/StatesApi/statesApiSlice"
import { Select } from "../pages/styled";

export default function StateDistricts(props:any) {
	const dispatch = useAppDispatch()
	const stateDiscticts = useFetchDistrictQuery(store.getState().states.value);

	function handleChange(e: any) {
		dispatch(districtSelected(e.target.value));
		props.setDistrictSelected(store.getState().districts.value)
	}

	return <>
		{stateDiscticts.data === undefined ? <div>carregando</div> :
			<Select name='select' defaultValue={'DEFAULT'} onChange={handleChange}>
        <option value="DEFAULT" disabled >Selecione um Município</option>
				{stateDiscticts.data.map((options:any) => <option key={options.id} value={options.id}>{options.nome}</option>)}
			</Select>}
		</>
}