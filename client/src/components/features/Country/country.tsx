import { Select } from 'antd';
import { useDispatch } from "react-redux";
import { Country } from "../../../app/types";
import { Countries, getCountry } from '../../../app/const';
import { selectCart, updateCoutry } from '../../features/Cart/cartSlice';
import { updateCost } from '../Cart/cartAPI';
import { useAppSelector } from '../../../app/hook';
const { Option } =  Select;

function CountryComponent(country: Country) {
  const dispatch = useDispatch();

  const ChangeCountry = (code: string) => {
    var country = getCountry(code);
    if (country) {
        dispatch(updateCoutry(country));
    }
  };
  
  return (
      <Select defaultValue={country.code} onChange={ChangeCountry}>
          {
              Countries.map((country, index) => {
                  return (
                      <Option 
                      key={index}
                      value={country.code}
                      >{country.name}
                      </Option>
                  );
              })
          }
      </Select>
  );
}

export default CountryComponent;
