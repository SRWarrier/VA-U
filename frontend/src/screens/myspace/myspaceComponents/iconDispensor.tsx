import Icon, {
  AreaChartOutlined,
  PieChartOutlined,
  BarChartOutlined,
  DotChartOutlined,
  LineChartOutlined,
  RadarChartOutlined,
  CreditCardOutlined,
  LinkOutlined,
} from "@ant-design/icons";

const IconMap = {
  area: AreaChartOutlined,
  pie: PieChartOutlined,
  bar: BarChartOutlined,
  dot: DotChartOutlined,
  line: LineChartOutlined,
  radar: RadarChartOutlined,
  card: CreditCardOutlined,
  link: LinkOutlined,
};

const IconDispenser = (icon: keyof typeof IconMap) => {
  return <Icon component={IconMap[icon]} className="listitem__icon" />;
};

export default IconDispenser;
