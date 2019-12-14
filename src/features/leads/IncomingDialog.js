import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
import './IncomingDialog.css'
import Fab from '@material-ui/core/Fab'
import PhoneDisabledRoundedIcon from '@material-ui/icons/PhoneDisabledRounded';
import PhonePausedRoundedIcon from '@material-ui/icons/PhonePausedRounded';
import PhoneCallbackRoundedIcon from '@material-ui/icons/PhoneCallbackRounded'
import CallMergeRoundedIcon from '@material-ui/icons/CallMergeRounded'
import ArrowRightAltTwoToneIcon from '@material-ui/icons/ArrowRightAltTwoTone'

export default function IncomingDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button id ="previewNextCallButton" onClick={handleClickOpen} variant="contained" color="secondary">
      Preview Next Call &nbsp; <ArrowRightAltTwoToneIcon/>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <div className="container">
            <div>
              <Typography variant="h6" component="h5" >
                ARIMDAM DE <Chip size="small" label="Ringing" />
              </Typography>
              <Typography variant="h4" component="h5" >
                +123 456 789
              </Typography>
            </div>
            <div>
              <Fab color="default" aria-label="ignore">
                <PhoneDisabledRoundedIcon />
              </Fab>
              <label>ignore</label>
            </div>
            <div>
              <Fab aria-label="accept">
                <PhoneCallbackRoundedIcon />
              </Fab>
              <label>answer</label>
              <span className="info">{"(Hangup Current Call)"}</span>
            </div>
            <div>
              <Fab color="info" aria-label="hold">
                <PhonePausedRoundedIcon />
              </Fab>
              <label>answer</label>
              <span className="info">{"(Put Current Call on Hold)"}</span>
            </div>
            <div>
              <Fab color="primary" aria-label="merge">
                <CallMergeRoundedIcon />
              </Fab>
              <label>merge call</label>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
