import numpy as np
import matplotlib.pyplot as plt

# Load the data from the text file
data_1 = np.loadtxt('Data_1.txt')
data_2 = np.loadtxt('Data_2.txt')

# Function to find peaks and troughs
def find_peaks_and_troughs(data):
    maxima = []
    minima = []

    for i in range(1, len(data) - 1):
        if data[i] > data[i - 1] and data[i] > data[i + 1]:
            maxima.append(i)
        elif data[i] < data[i - 1] and data[i] < data[i + 1]:
            minima.append(i)

    return maxima, minima

# Find peaks and troughs for both datasets
maxima_1, minima_1 = find_peaks_and_troughs(data_1)
maxima_2, minima_2 = find_peaks_and_troughs(data_2)

# Plotting Data_1 with maxima and minima
plt.figure(figsize=(10, 6))
plt.plot(data_1, label='Signal Data')
plt.scatter(maxima_1, data_1[maxima_1], color='red', label='Maxima')
plt.scatter(minima_1, data_1[minima_1], color='blue', label='Minima')
plt.title('Signal Data 1 with Peaks and Troughs')
plt.xlabel('Index')
plt.ylabel('Amplitude')
plt.legend()
plt.show()

# Plotting Data_2 with maxima and minima
plt.figure(figsize=(10, 6))
plt.plot(data_2, label='Signal Data')
plt.scatter(maxima_2, data_2[maxima_2], color='red', label='Maxima')
plt.scatter(minima_2, data_2[minima_2], color='blue', label='Minima')
plt.title('Signal Data 2 with Peaks and Troughs')
plt.xlabel('Index')
plt.ylabel('Amplitude')
plt.legend()
plt.show()

# Output indices of maxima and minima
print("Data_1 Maxima:", maxima_1)
print("Data_1 Minima:", minima_1)
print("Data_2 Maxima:", maxima_2)
print("Data_2 Minima:", minima_2)
