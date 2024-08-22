#include <stdio.h>
#include <stdlib.h>

void find_peaks_and_troughs(float data[], int length, int *maxima, int *minima, int *maxima_count, int *minima_count) {
    *maxima_count = 0;
    *minima_count = 0;

    for (int i = 1; i < length - 1; i++) {
        if (data[i] > data[i - 1] && data[i] > data[i + 1]) {
            maxima[(*maxima_count)++] = i;
        } else if (data[i] < data[i - 1] && data[i] < data[i + 1]) {
            minima[(*minima_count)++] = i;
        }
    }
}

int main() {
    FILE *file;
    float data_1[1000];
    float data_2[1000];
    int length_1 = 0;
    int length_2 = 0;
    int maxima_1[1000], minima_1[1000], maxima_2[1000], minima_2[1000];
    int maxima_count_1, minima_count_1, maxima_count_2, minima_count_2;

    file = fopen("Data_1.txt", "r");
    if (file == NULL) {
        printf("Error: Could not open Data_1.txt\n");
        return 1;
    }
    while (fscanf(file, "%f", &data_1[length_1]) != EOF) {
        length_1++;
    }
    fclose(file);

    file = fopen("Data_2.txt", "r");
    if (file == NULL) {
        printf("Error: Could not open Data_2.txt\n");
        return 1;
    }
    while (fscanf(file, "%f", &data_2[length_2]) != EOF) {
        length_2++;
    }
    fclose(file);

    find_peaks_and_troughs(data_1, length_1, maxima_1, minima_1, &maxima_count_1, &minima_count_1);
    find_peaks_and_troughs(data_2, length_2, maxima_2, minima_2, &maxima_count_2, &minima_count_2);

    printf("Data_1 Maxima: ");
    for (int i = 0; i < maxima_count_1; i++) {
        printf("%d ", maxima_1[i]);
    }
    printf("\n");

    printf("Data_1 Minima: ");
    for (int i = 0; i < minima_count_1; i++) {
        printf("%d ", minima_1[i]);
    }
    printf("\n");

    printf("Data_2 Maxima: ");
    for (int i = 0; i < maxima_count_2; i++) {
        printf("%d ", maxima_2[i]);
    }
    printf("\n");

    printf("Data_2 Minima: ");
    for (int i = 0; i < minima_count_2; i++) {
        printf("%d ", minima_2[i]);
    }
    printf("\n");

    return 0;
}
