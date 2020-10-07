import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const useStyles = makeStyles((theme) => ({
  root: {
    
    width: '200%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    width:"80%",
    flexBasis: '0%',
    flexShrink: 0,
    marginInlineEnd:'100%',
    marginRight:'50%',
    
   
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.primary.main,
  },
}));

export default function ControlledAccordions(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : true);
  };

  return (
    <div style={{height:"350px"}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Folders</Typography>
          
        </AccordionSummary>
        <AccordionDetails>
        <ButtonGroup
        orientation="vertical"
        color="primary.light"
        aria-label="vertical contained primary button group"
        variant="text"
      >
        <Button onClick = {()=> props.setTypeMail("inbox")}>Inbox</Button>
        <Button onClick = {()=> props.setTypeMail("spam")}>Spam</Button>
        <Button onClick = {()=> props.setTypeMail("delete")}>Deleted Items</Button>
        <Button onClick = {()=> props.setTypeMail("custom")}>My Folder</Button>
      </ButtonGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Users</Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Users Data
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      
    </div>
  );
}
