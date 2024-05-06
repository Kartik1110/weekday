import React from 'react';
import { styled } from '@mui/material/styles';
import { Input, IconButton, InputAdornment } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import ClearIcon from '@mui/icons-material/Clear';

const FormControlStyled = styled('div')(
    () => `
    padding: 10px;
    max-width: 100px;
    width: auto;
    margin: theme.spacing(1),
    overflow: hidden;
  `,
);

const SelectStyled = styled(Select)(
    () => `
    padding: 10px;
    margin: theme.spacing(1),
    overflow: hidden;
    border-color: rgb(204, 204, 204);
  `,
);

const StyledInput = styled(Input)(
    () => `
    height: 46px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px 10px;
    width: 200px; /* Change the width as desired */
  `,
);

const ClearButton = styled(IconButton)(
    () => `
    font-size: 20px;
    margin-right: 20px
    `,
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'hbhb',
    'uuu',
    'quiqdx',
    'yyy',
];

type MutiSelectProps = {
    label: string;
};

export default function MultiSelect({ label }: MutiSelectProps) {
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        setPersonName(event.target.value);
    };

    const handleClear = () => {
        setPersonName([]);
    };

    return (
        <FormControlStyled>
            <InputLabel style={{ fontSize: '13px', color: 'black' }} id="demo-mutiple-chip-label">{label}</InputLabel>
            <SelectStyled
                labelId="demo-mutiple-chip-label"
                id="demo-mutiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={
                    <StyledInput
                        id="select-multiple-chip"
                        endAdornment={
                            <InputAdornment position="end">
                                {personName.length > 0 && (
                                    <ClearButton onClick={handleClear} size="small">
                                        <ClearIcon />
                                    </ClearButton>
                                )}
                            </InputAdornment>
                        }
                    />
                }
                renderValue={(selected) => (
                    <div>
                        {selected.map((value) => (
                            <Chip key={value} label={value} />
                        ))}
                    </div>
                )}
                MenuProps={MenuProps}
            >
                {names.map((name) => (
                    <MenuItem key={name} value={name}>
                        {name}
                    </MenuItem>
                ))}
            </SelectStyled>
        </FormControlStyled>
    );
}
