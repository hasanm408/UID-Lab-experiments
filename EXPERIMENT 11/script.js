// PIE CHART - Category Distribution
const categoryCtx = document.getElementById('categoryPieChart').getContext('2d');
const categoryPieChart = new Chart(categoryCtx, {
  type: 'pie',
  data: {
    labels: ['Electronics', 'Furniture', 'Groceries', 'Clothing', 'Stationery'],
    datasets: [{
      label: 'Inventory Categories',
      data: [30, 15, 25, 20, 10],
      backgroundColor: [
        '#007bff', '#28a745', '#ffc107', '#dc3545', '#17a2b8'
      ],
      borderColor: '#fff',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Item Category Distribution',
        font: {
          size: 18
        }
      }
    }
  }
});

// BAR CHART - Stock Levels
const stockCtx = document.getElementById('stockBarChart').getContext('2d');
const stockBarChart = new Chart(stockCtx, {
  type: 'bar',
  data: {
    labels: ['Laptop', 'Chair', 'Apple', 'T-Shirt', 'Pen'],
    datasets: [{
      label: 'Stock Quantity',
      data: [50, 40, 75, 60, 120],
      backgroundColor: '#007bff',
      borderRadius: 8
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Item Stock Levels',
        font: {
          size: 18
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
