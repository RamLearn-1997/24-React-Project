import Chart from 'react-apexcharts';

const options = {
  labels: ["Expense", "Income"],
  colors: ["#fd5e53", "#213ebf"],
  legend: {
    show: false,
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: true,
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
  },
};

export default function TransactionChartSummary({ expense = 100, income = 500 }) {
  const series = [expense, income];
  
  return (
    <Chart
      options={options}
      series={series}
      type='pie'
      width='250'
    />
  );
}
