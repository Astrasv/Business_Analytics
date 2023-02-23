const ctx = document.getElementById('chart').getContext('2d');

const data = {
  labels: ['Category A', 'Category B', 'Category C'],
  datasets: [{
    label: 'Value',
    data: [50, 75, 100],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)'
    ],
    borderWidth: 1
  }]
};

const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

const chart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});
