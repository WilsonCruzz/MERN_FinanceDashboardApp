// eslint-disable-next-line 
import {Palette, PaletteOptions} from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
    interface PaletteColor {
        [key:number]: string;
    }
    interface Palette {
    tertiary: PaletteColor;
    }
}