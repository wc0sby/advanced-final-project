import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    // marginRight: '5%'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 150,
    borderColor: 'white'
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  fonts: {
    color: 'white',
    fontWeight: 'bold'
  }
});

class SimpleSelect extends React.Component {
  state = {
    month: '',
    name: 'hai',
    labelWidth: 0,
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleChange = (event) => {
    const selection = event.target.value
     return selection
  };


  getSelections = (data) => {
    return data.map((i,k)=>{
      return <MenuItem key={k} value={i}>{i}</MenuItem>
    })
  }

  render() {
    const { classes, title, data, selection, setter } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor={`outlined-${title}`}
            >
            {title}
          </InputLabel>
          <Select
            className={classes.fonts}
            value={data[selection]}
            onChange={(e)=>setter(this.handleChange(e))}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name={this.props.title}
                id="outlined-month"
              />
            }
          >
            {/* <MenuItem value="">
              <em>None</em>
            </MenuItem> */}
            {this.getSelections(this.props.data)}
          </Select>
        </FormControl>
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
