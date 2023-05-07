import { TextField, FormControl } from '@mui/material';
import Box from '@mui/material/Box';
export const NormalInput = (props) => {

    let {
        type = 'text',
        className = '',
        id = Math.random(),
        placeholder = 'Enter',
        label = '',
        errorMessage = '',
        materialUi = true,
        maxRows = 2
    } = props;


    return (
        <FormControl fullWidth error={!!errorMessage} className={`mb-3`}>
            <TextField {...props} />
            {!!errorMessage && <div className="form-text text-danger">{errorMessage}</div>}
        </FormControl>
    )
}