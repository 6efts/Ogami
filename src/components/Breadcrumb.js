import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { withRouter } from 'react-router-dom'

const Breadcrumb = (props) => {
  console.log(props)
  return (

    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" >MUI</Link>
      <Link underline="hover" color="inherit">Core</Link>
      <Typography color="text.primary">Breadcrumbs</Typography>
    </Breadcrumbs>

  );
}

export default withRouter(Breadcrumb);