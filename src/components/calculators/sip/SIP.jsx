import { useState } from "react"

export default function SIP() {

    const [monthlyInvestmentAmount, setMonthlyInvestmentAmount] = useState(5000)
    const [expectedReturnRate, setExpectedReturnRate] = useState(12)
    const [timePeriod, setTimePeriod] = useState(10)

    function handleInputChange(event) {
        const { name, value } = event.target;
        const num = value === '' ? '' : Number(value);
        if (name === 'monthlyInvestmentAmount') setMonthlyInvestmentAmount(num)
        if (name === 'expectedReturnRate') setExpectedReturnRate(num)
        if (name === 'timePeriod') setTimePeriod(num)
    }

    // Compute future value of SIP using standard formula (monthly contributions at period end)
    function computeFV(monthlyAmt, annualRatePercent, years) {
        const P = Number(monthlyAmt) || 0;
        const r = (Number(annualRatePercent) || 0) / 100 / 12; // monthly rate
        const n = (Number(years) || 0) * 12; // total months

        if (n === 0) return 0;

        // If rate is zero, FV is simply P * n
        if (r === 0) return P * n;

        // FV = P * [ ( (1+r)^n - 1 ) / r ] * (1 + r)   -> this is for payments at period beginning
        // Many SIP calculators (including Groww) assume contributions at period end, using FV = P * [ ( (1+r)^n - 1 ) / r ]
        // Use the end-of-period formula to match Groww
        const fv = P * ( (Math.pow(1 + r, n) - 1) / r );
        return fv;
    }

    const investedAmount = (Number(monthlyInvestmentAmount) || 0) * (Number(timePeriod) || 0) * 12;
    const fv = computeFV(monthlyInvestmentAmount, expectedReturnRate, timePeriod);
    const nfIN = new Intl.NumberFormat('en-IN');
    const investedFormatted = nfIN.format(Math.round(investedAmount));
    const returnsAmount = fv - investedAmount;
    const returnsFormatted = nfIN.format(Math.round(returnsAmount));
    const totalFormatted = nfIN.format(Math.round(fv));

    return (
        <div className="container-fluid my-5 py-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-md-12">
                         <h2>SIP CALCULATOR</h2>
                         <form className="row">
                            <div className="form-group mb-3 col-md-4">
                                <label htmlFor="monthlyInvestmentAmount">Monthly Investment Amount</label>
                                <input type="number" onChange={handleInputChange} value={monthlyInvestmentAmount} className="form-control" id="monthlyInvestmentAmount" name="monthlyInvestmentAmount" placeholder="Amount" />
                            </div>
                            <div className="form-group mb-3 col-md-4">
                                <label htmlFor="expectedReturnRate">Expected Return Rate</label>
                                <input type="number" onChange={handleInputChange} value={expectedReturnRate} className="form-control" id="expectedReturnRate" name="expectedReturnRate" placeholder="Percentage(%)" />
                            </div>
                            <div className="form-group mb-3 col-md-4">
                                <label htmlFor="timePeriod">Time Period</label>
                                <input type="number" onChange={handleInputChange} value={timePeriod} className="form-control" id="timePeriod" name="timePeriod" placeholder="Year(s)" />
                            </div>
                         </form>
                        

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <p>Invested amount: &#8377; {investedFormatted}</p>
                                <p>Est. returns: &#8377; {returnsFormatted}</p>
                                <p>Total Value: &#8377; {totalFormatted}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}