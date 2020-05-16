<html>

<head>COVID STATS DATA</head>

<body>
    <div>
        <h1>COVID US Total Data</h1>
        <table>
            <thead>
                <tr>
                    <th>Total Test Results</th>
                    <th>Positive Count</th>
                    <th>Negative Count</th>
                    <th>Death Count</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let data of covidDataList">
                    <th>{{ data.totalTestResults }}</th>
                    <td>{{ data.positive }}</td>
                    <td>{{ data.negative }}</td>
                    <td>{{ data.death }}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div>
        <h1>State wise stats data</h1>
        <mat-form-field>
            <mat-label>States</mat-label>
            <mat-select [(ngModel)]="stateSelectedValue" (change)="onStateChange()" name="food">
                <mat-option value="CA" selected>California</mat-option>
                <mat-option value="WA">Washington</mat-option>
                <mat-option value="SF">San Francisco</mat-option>
            </mat-select>
        </mat-form-field>
        <table>
            <thead>
                <tr>
                    <th>Total Test Results</th>
                    <th>Positive Count</th>
                    <th>Negative Count</th>
                    <th>Death Count</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>{{ stateCovidData.totalTestResults }}</th>
                    <td>{{ stateCovidData.positive }}</td>
                    <td>{{ stateCovidData.negative }}</td>
                    <td>{{ stateCovidData.death }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</body>

</html>