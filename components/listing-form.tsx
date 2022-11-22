import type { NextPage } from "next";
import {
  TextField,
  FormControlLabel,
  Radio,
  Icon,
  IconButton,
} from "@mui/material";

const ListingForm: NextPage = () => {
  return (
    <main className="self-stretch bg-gray-100 h-[601px] shrink-0 flex flex-col p-[29px_13px_60px] box-border items-center justify-start gap-[18px] lg:w-full md:h-[60%] md:pb-[650px] md:box-border">
      <div className="self-stretch flex flex-row items-start justify-start gap-[705px] lg:w-full lg:gap-[25%] md:w-full md:flex-col md:pl-[0px] md:pt-[0px] md:box-border md:gap-[15px]">
        <div className="relative w-[251px] h-[155px] shrink-0">
          <TextField
            className="[border:none] bg-[transparent] absolute top-[101px] left-[0px]"
            sx={{ width: 251 }}
            color="primary"
            variant="outlined"
            type="number"
            label="₥Price"
            size="medium"
            margin="none"
            required
          />
          <TextField
            className="[border:none] bg-[transparent] absolute top-[0px] left-[0px]"
            sx={{ width: 251 }}
            color="primary"
            variant="outlined"
            type="text"
            label="Product Name"
            placeholder="Product Name"
            size="medium"
            margin="none"
            required
          />
        </div>
        <div className="relative w-[437px] h-[215px] shrink-0">
          <TextField
            className="[border:none] bg-[transparent] absolute top-[65px] left-[0px]"
            sx={{ width: 382 }}
            color="primary"
            variant="outlined"
            type="text"
            label="Shipping Costs"
            placeholder="Shipping Costs"
            size="medium"
            margin="none"
          />
          <input
            className="absolute top-[0px] left-[0px] bg-gray-400 w-[382px] h-[47px]"
            type="file"
            required
            size
          />
          <TextField
            className="[border:none] bg-[transparent] absolute top-[173px] left-[0px]"
            sx={{ width: 382 }}
            color="primary"
            variant="outlined"
            type="text"
            label="Contact Email/Discord Handle"
            placeholder="Contact Email/Discord Handle"
            size="medium"
            margin="none"
            required
          />
          <FormControlLabel
            className="absolute top-[122px] left-[0px]"
            label="Online Service/Digital Deliverable"
            labelPlacement="end"
            control={<Radio color="primary" size="medium" />}
          />
        </div>
      </div>
      <TextField
        className="self-stretch flex-1 relative"
        color="primary"
        variant="outlined"
        multiline
        rows={8}
        maxRows={12}
        label="Product Description"
        placeholder="Product Description"
        margin="dense"
        required
      />
      <IconButton color="primary" disabled>
        <Icon>send_sharp</Icon>
      </IconButton>
    </main>
  );
};

export default ListingForm;
