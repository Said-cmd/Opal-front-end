import React, { useState } from "react";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { FormControlLabel, makeStyles } from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
})

function AddTransaction() { 
    const classes = useStyles()
    const [date, setDate] = useState(null);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('general');
    const [amount, setAmount] = useState('')
    const [dateError, setDateError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);
    const [categoryError, setCategoryError] = useState(false)
    const [amountError, setAmountError] = useState(false)
    const handleDateChange = (date) => {
        setDate(date);
      };    
    const handleSubmit = (e) => {
        e.preventDefault()
        setDateError(false)
        setDescriptionError(false)
        setCategoryError(false)
        setAmountError(false)
        if (date == null) {
            setDateError(true)
        }
        if (description == '') {
            setDescriptionError(true)
        }
        if (category == '') {
            setCategoryError(true)
        }
        if (amount == '') {
            setAmountError(true)
        }
        if (date && description && amount && category) {
            console.log(date, description, amount, category)
        }
    }
     return(
        <Container>
            <Typography 
            variant="h6"
            component="h2"
            color="textSecondary"
            gutterBottom
            >
            Add a Transaction 
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
            className={classes.field}
            variant="outlined"
            inputVariant="outlined"
            color="secondary"
            required
            fullWidth
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date"
            value={date}
            onChange={handleDateChange}
            error={dateError}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
            />
            </MuiPickersUtilsProvider>
            <TextField
            className={classes.field}
            label="Description"
            variant="outlined"
            color="secondary"
            required
            fullWidth
            multiline
            minRows={5}
            onChange={(e) => setDescription(e.target.value)}
            error={descriptionError}
            >
            </TextField>
            <TextField
            className={classes.field}
            fullWidth
            label="Amount"
            required
            color="secondary"
            variant="outlined"
            inputVariant="outlined"
            currencySymbol="£"
            minimumValue="0"
            outputFormat="string"
            decimalCharacter="."
            digitGroupSeparator=","
            onChange={(e)=> setAmount(e.target.value)}
            error={amountError}
            />
            <FormControl
            className={classes.field}
            required
            color="secondary"
            >
            <FormLabel>Category</FormLabel>
            <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            error={categoryError}
            required
            >
            <FormControlLabel value="general" control={<Radio />} label="General 🔩"/>
            <FormControlLabel value="income" control={<Radio />} label="Income 💰"/>
            <FormControlLabel value="bills" control={<Radio />} label="Bills 💡"/>
            <FormControlLabel value="entertainment/leisure" control={<Radio />} label="Entertainment and Lesiure 🏖"/>
            <FormControlLabel value="savings" control={<Radio />} label="Savings 🌱"/>
            <FormControlLabel value="shopping" control={<Radio />} label="Shopping 🛍"/>
            <FormControlLabel value="transport" control={<Radio />} label="Transport 🚗"/>
            </RadioGroup>
            </FormControl>
            <Button
            type="submit"
            variant="contained"
            color="secondary" 
            >
                Submit
            </Button>
            </form>
        </Container>
     );
}
export default AddTransaction;

