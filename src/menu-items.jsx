import HomeIcon from '@mui/icons-material/Home';
import {
  CandlestickChart as CandlestickChartIcon,
  Group as GroupIcon,
  SolarPower as SolarPowerIcon,
  BatterySaver as BatterySaverIcon,
  AcUnit as AcUnitIcon,
  ReportProblem as ReportProblemIcon,
  ThermostatAuto as ThermostatAutoIcon,
  SignalCellularAltOutlined as SignalCellularAltOutlinedIcon,
  NearbyErrorOutlined as NearbyErrorOutlinedIcon,
  MultilineChartOutlined as MultilineChartOutlinedIcon,
  GamesOutlined as GamesOutlinedIcon,
  AdfScannerOutlined as AdfScannerOutlinedIcon,
  EqualizerOutlined as EqualizerOutlinedIcon,
  SummarizeOutlined as SummarizeOutlinedIcon,
  StarHalfOutlined as StarHalfOutlinedIcon,
  OndemandVideoOutlined as OndemandVideoOutlinedIcon,
  HomeOutlined,
} from "@mui/icons-material";
import EngineeringIcon from '@mui/icons-material/Engineering';

const menuItems = 
 {
  items: [
    {
      id: 'navigation',
      title: '',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: <HomeOutlined />,
          url: '/app/dashboard/default'
        },
        {
          id: 'component',
          title: 'Monitor',
          type: 'collapse',
          icon: <EqualizerOutlinedIcon />,
          children: [
            {
              id: 'button',
              title: 'Building Overview',
              type: 'item',
              icon:<SignalCellularAltOutlinedIcon />,
              url: '/basic/button'
            },
            {
              id: 'client',
              title: 'Client',
              type: 'item',
              icon: <GroupIcon />,
              url: '/monitor/client'
            },
            {
              id: 'breadcrumb',
              title: 'Cooling/HVAC',
              type: 'item',
              icon: <AcUnitIcon />,
              url: '/basic/breadcrumb-paging'
            },
            {
              id: 'collapse',
              title: 'Renewable energy',
              type: 'item',
              icon: <SolarPowerIcon />,
              url: '/basic/collapse'
            },
            {
              id: 'tabs-pills',
              title: 'EV',
              type: 'item',
              icon: <BatterySaverIcon />,
              url: '/monitor/ev'
            },
            {
              id: 'typography',
              title: 'Energy Storage',
              type: 'item',
              icon:<SignalCellularAltOutlinedIcon />,
              url: '/basic/typography'
            },
            {
              id: 'common-areas',
              title: 'Common Areas',
              type: 'item',
              icon: <EngineeringIcon />,
              url: '/basic/tabs-pills'
            }
          ]
        },
        {
          id: 'forms',
          title: 'Control',
          type: 'collapse',
          icon: <GamesOutlinedIcon />,
          url: '/forms/form-basic',
          children: [
            {
              id: 'button',
              title: 'Battery Control',
              type: 'item',
              icon: <BatterySaverIcon />,
              url: '/controls/battery'
            },
            {
              id: 'button',
              title: 'Thermal Controls',
              type: 'item',
              icon: <ThermostatAutoIcon />,
              url: '/controls/thermal'
            },
          ]
        },
        {
          id: 'table',
          title: 'Optimize',
          type: 'collapse',
          icon: <MultilineChartOutlinedIcon />,
          url: '/tables/bootstrap',
          children: [
            {
              id: 'button',
              title: 'Peak Analysis',
              type: 'item',
              icon: <OndemandVideoOutlinedIcon />,
              url: '/optimize/peakanalysis'
            },
            {
              id: 'button',
              title: 'kVA vs KW',
              type: 'item',
              icon: <CandlestickChartIcon />,
              url: '/controls/battery'
            },
          ]
        },
        {
          id: 'iot-fleet',
          title: 'IOT Fleet status / Health Status',
          type: 'item',
          icon: <AdfScannerOutlinedIcon />,
          url: '/tables/bootstrap'
        },
        {
          id: 'monthly-report',
          title: 'Monthly Reports',
          type: 'item',
          icon: <SummarizeOutlinedIcon />,
          url: '/tables/bootstrap'
        },
        {
          id: 'alert',
          title: 'Alerts / Notifications',
          type: 'item',
          icon: <ReportProblemIcon />,
          url: '/tables/bootstrap'
        }
      ]
    }
    
  ]
};



export default menuItems;
