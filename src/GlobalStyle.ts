import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
@font-face {
    font-family: 'Clash Display';
    src: url('//cdn.fontshare.com/wf/FPDAZ2S6SW4QMSRIIKNNGTPM6VIXYMKO/5HNPQ453FRLIQWV2FNOBUU3FKTDZQVSG/Z3MGHFHX6DCTLQ55LJYRJ5MDCZPMFZU6.woff2') format('woff2'),
         url('//cdn.fontshare.com/wf/FPDAZ2S6SW4QMSRIIKNNGTPM6VIXYMKO/5HNPQ453FRLIQWV2FNOBUU3FKTDZQVSG/Z3MGHFHX6DCTLQ55LJYRJ5MDCZPMFZU6.woff') format('woff'),
         url('//cdn.fontshare.com/wf/FPDAZ2S6SW4QMSRIIKNNGTPM6VIXYMKO/5HNPQ453FRLIQWV2FNOBUU3FKTDZQVSG/Z3MGHFHX6DCTLQ55LJYRJ5MDCZPMFZU6.ttf') format('truetype');
    font-weight: 600;
    font-display: swap;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Clash Display';
    src: url('//cdn.fontshare.com/wf/BFBSY7LX5W2U2EROCLVVTQP4VS7S4PC3/IIUX4FGTMD2LK2VWD3RVTAS4SSMUN7B5/53RZKGODFYDW3QHTIL7IPOWTBCSUEZK7.woff2') format('woff2'),
         url('//cdn.fontshare.com/wf/BFBSY7LX5W2U2EROCLVVTQP4VS7S4PC3/IIUX4FGTMD2LK2VWD3RVTAS4SSMUN7B5/53RZKGODFYDW3QHTIL7IPOWTBCSUEZK7.woff') format('woff'),
         url('//cdn.fontshare.com/wf/BFBSY7LX5W2U2EROCLVVTQP4VS7S4PC3/IIUX4FGTMD2LK2VWD3RVTAS4SSMUN7B5/53RZKGODFYDW3QHTIL7IPOWTBCSUEZK7.ttf') format('truetype');
    font-weight: 700;
    font-display: swap;
    font-style: normal;
  }
  
  /* Poppins */
  @font-face {
    font-family: 'Poppins';
    src: url('//cdn.fontshare.com/wf/K4RHKGAGLQZBXEZQT2O2AGSLKJF2E4YC/JRUTXNFPWLFGIEVSSEYOW7EP7TYM3V6A/UCDYLFFGLZRGCFY5GYDYM5LDB52BAR5M.woff2') format('woff2'),
         url('//cdn.fontshare.com/wf/K4RHKGAGLQZBXEZQT2O2AGSLKJF2E4YC/JRUTXNFPWLFGIEVSSEYOW7EP7TYM3V6A/UCDYLFFGLZRGCFY5GYDYM5LDB52BAR5M.woff') format('woff'),
         url('//cdn.fontshare.com/wf/K4RHKGAGLQZBXEZQT2O2AGSLKJF2E4YC/JRUTXNFPWLFGIEVSSEYOW7EP7TYM3V6A/UCDYLFFGLZRGCFY5GYDYM5LDB52BAR5M.ttf') format('truetype');
    font-weight: 500;
    font-display: swap;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Poppins';
    src: url('//cdn.fontshare.com/wf/E6J4GS76KHNRRUWODFCFOX2JRKNRSFVY/3GYVT5S4AH7VMPASDDKOTIPV6P3WJXGI/24R4YOH3G2SFDSTCNHOVGYEX3DMRC3CE.woff2') format('woff2'),
         url('//cdn.fontshare.com/wf/E6J4GS76KHNRRUWODFCFOX2JRKNRSFVY/3GYVT5S4AH7VMPASDDKOTIPV6P3WJXGI/24R4YOH3G2SFDSTCNHOVGYEX3DMRC3CE.woff') format('woff'),
         url('//cdn.fontshare.com/wf/E6J4GS76KHNRRUWODFCFOX2JRKNRSFVY/3GYVT5S4AH7VMPASDDKOTIPV6P3WJXGI/24R4YOH3G2SFDSTCNHOVGYEX3DMRC3CE.ttf') format('truetype');
    font-weight: 600;
    font-display: swap;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Poppins';
    src: url('//cdn.fontshare.com/wf/EOHGWBZYYKO6R4PWP4S2B3FFWHHBEZN6/UWQLMF4AFWLXCJQCFV3WRVYC77KZXPRB/FYG6OCH7XOLUUSZTIZE65ATBZWF623O4.woff2') format('woff2'),
         url('//cdn.fontshare.com/wf/EOHGWBZYYKO6R4PWP4S2B3FFWHHBEZN6/UWQLMF4AFWLXCJQCFV3WRVYC77KZXPRB/FYG6OCH7XOLUUSZTIZE65ATBZWF623O4.woff') format('woff'),
         url('//cdn.fontshare.com/wf/EOHGWBZYYKO6R4PWP4S2B3FFWHHBEZN6/UWQLMF4AFWLXCJQCFV3WRVYC77KZXPRB/FYG6OCH7XOLUUSZTIZE65ATBZWF623O4.ttf') format('truetype');
    font-weight: 700;
    font-display: swap;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Poppins';
    src: url('//cdn.fontshare.com/wf/GCE3CQJHNQPET5GTQTXRVLUNQRTTGRYD/PW7XXFU476CRE7KBIKF63THLLGCBMQ4S/IX2APREQD7NDYAG5A6YIV4Q2246OG5XH.woff2') format('woff2'),
         url('//cdn.fontshare.com/wf/GCE3CQJHNQPET5GTQTXRVLUNQRTTGRYD/PW7XXFU476CRE7KBIKF63THLLGCBMQ4S/IX2APREQD7NDYAG5A6YIV4Q2246OG5XH.woff') format('woff'),
         url('//cdn.fontshare.com/wf/GCE3CQJHNQPET5GTQTXRVLUNQRTTGRYD/PW7XXFU476CRE7KBIKF63THLLGCBMQ4S/IX2APREQD7NDYAG5A6YIV4Q2246OG5XH.ttf') format('truetype');
    font-weight: 800;
    font-display: swap;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Poppins';
    src: url('//cdn.fontshare.com/wf/22GWRXQXMICIWABQXFWKIWZIILKO5JDJ/2BBKMSVLV5CSDOZ7HEEECOTKPOVVJOC3/RNFY4UJD36462ZMGEIC5I7KNE73BPOAU.woff2') format('woff2'),
         url('//cdn.fontshare.com/wf/22GWRXQXMICIWABQXFWKIWZIILKO5JDJ/2BBKMSVLV5CSDOZ7HEEECOTKPOVVJOC3/RNFY4UJD36462ZMGEIC5I7KNE73BPOAU.woff') format('woff'),
         url('//cdn.fontshare.com/wf/22GWRXQXMICIWABQXFWKIWZIILKO5JDJ/2BBKMSVLV5CSDOZ7HEEECOTKPOVVJOC3/RNFY4UJD36462ZMGEIC5I7KNE73BPOAU.ttf') format('truetype');
    font-weight: 900;
    font-display: swap;
    font-style: normal;
  }
`

export default GlobalStyle;