// sample/page.tsx
import React from "react";

const Citation = ({ href, text }: { href: string; text: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    {text}
  </a>
);

export default function Page() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Best Personal Investment Opportunities in Singapore
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left font-medium text-gray-700">
                Investment Vehicle
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">
                Suitable Horizon
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">
                Risk Level
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">
                Expected Returns (p.a.)
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">
                Liquidity
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">
                Tax Implications
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">
                Min. Investment
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">
                How to Invest / Platforms
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {/* Row 1 */}
            <tr>
              <td className="px-4 py-2">SG Govt T-Bills &amp; SGS Bonds</td>
              <td className="px-4 py-2">
                Short (T-bills 6–12m); Medium/Long (bonds 2–10+ yrs)
              </td>
              <td className="px-4 py-2">Low (principal secure)</td>
              <td className="px-4 py-2">
                ~2.5–3.7% (depends on tenor &amp; interest rates; e.g. 6m ~2.7%
                <Citation
                  href="https://www.stashaway.sg/r/singapore-treasury-bills-complete-guide#:~:text=6,Yield"
                  text=" stashaway"
                />
                )
              </td>
              <td className="px-4 py-2">
                High (tradeable; T-bill &lt;1yr lock)
              </td>
              <td className="px-4 py-2">
                Interest income tax-free for individuals
              </td>
              <td className="px-4 py-2">
                S$1,000 (T-bills/SGS face value)
              </td>
              <td className="px-4 py-2">
                Via local banks (ATM/ibanking), SGX brokers; CPF/SRS possible
              </td>
            </tr>
            {/* Row 2 */}
            <tr>
              <td className="px-4 py-2">Singapore Savings Bonds (SSB)</td>
              <td className="px-4 py-2">
                Flexible (redeem anytime up to 10 yrs)
              </td>
              <td className="px-4 py-2">Low</td>
              <td className="px-4 py-2">
                ~2.7% first year, ~2.8–3% 10-yr avg (current issue)
                <Citation
                  href="https://www.stashaway.sg/r/singapore-savings-bond-ssb-allotment-update#:~:text=In%20the%20most%20recent%20SSB,annually"
                  text=" stashaway"
                />
              </td>
              <td className="px-4 py-2">
                High (monthly redemption available)
              </td>
              <td className="px-4 py-2">Interest tax-free</td>
              <td className="px-4 py-2">S$500</td>
              <td className="px-4 py-2">
                Apply via local banks (ATM/online) using CDP or SRS
              </td>
            </tr>
            {/* Row 3 */}
            <tr>
              <td className="px-4 py-2">High-Yield Savings / FDs</td>
              <td className="px-4 py-2">Short (0–24 months)</td>
              <td className="px-4 py-2">Low</td>
              <td className="px-4 py-2">
                ~1–4% (varies by bank and criteria; FDs ~3–4% for 12m now)
              </td>
              <td className="px-4 py-2">
                Very High (savings instant, FDs early withdrawal penalty)
              </td>
              <td className="px-4 py-2">Interest tax-free</td>
              <td className="px-4 py-2">
                S$0 for savings; FDs usually ≥ S$5k–20k
              </td>
              <td className="px-4 py-2">
                Local banks (DBS, OCBC, UOB, etc.)
              </td>
            </tr>
            {/* Row 4 */}
            <tr>
              <td className="px-4 py-2">CPF OA/SA (risk-free)</td>
              <td className="px-4 py-2">
                Long (until retirement); OA medium if used for housing
              </td>
              <td className="px-4 py-2">Low (govt guaranteed)</td>
              <td className="px-4 py-2">
                OA 2.5%, SA 4% (extra +1% on first 60k)
                <Citation
                  href="https://www.maybank2u.com.sg/en/imsavvy/wealth-post/invest-cpf-savings.html#:~:text=Each%20acts%20as%20a%20savings,a"
                  text=" maybank2u"
                />
              </td>
              <td className="px-4 py-2">
                Low (locked-in, except for allowed uses)
              </td>
              <td className="px-4 py-2">
                Interest tax-free; CPF payouts tax-free
              </td>
              <td className="px-4 py-2">N/A (mandatory contributions)</td>
              <td className="px-4 py-2">
                CPF Board (automatic); CPFIS for investing CPF funds via banks
              </td>
            </tr>
            {/* Row 5 */}
            <tr>
              <td className="px-4 py-2">CPF Investment Scheme</td>
              <td className="px-4 py-2">Long (until withdrawal)</td>
              <td className="px-4 py-2">
                Varies (depends on invested product)
              </td>
              <td className="px-4 py-2">
                Varies: needs to beat 2.5/4% CPF interest; e.g. CPF-OA T-bills ~3%
                <Citation
                  href="https://www.channelnewsasia.com/singapore/invest-t-bills-treasury-bills-cpf-ordinary-account-3040226#:~:text=As%20T,Ordinary%20Account%20funds%2C%20but"
                  text=" channelnewsasia"
                />
              </td>
              <td className="px-4 py-2">
                Low (funds locked in CPF after selling until eligible withdrawal)
              </td>
              <td className="px-4 py-2">
                No tax on CPF investment gains (all within CPF)
              </td>
              <td className="px-4 py-2">
                &gt;S$20k OA (eligibility to start)
              </td>
              <td className="px-4 py-2">
                Agent banks (DBS/OCBC/UOB) or CPFIS platforms (Endowus etc.)
              </td>
            </tr>
            {/* Row 6 */}
            <tr>
              <td className="px-4 py-2">Insurance Endowment Plans</td>
              <td className="px-4 py-2">
                Short to Long (2–25 yrs terms)
              </td>
              <td className="px-4 py-2">Low</td>
              <td className="px-4 py-2">
                ~2–3% guaranteed; up to ~4–5% with bonuses
                <Citation
                  href="https://www.dbs.com.sg/personal/insurance/endowment/wealth-accumulation-plans/savvyendowment#:~:text=SavvyEndowment%2019%20,guaranteed"
                  text=" DBS"
                />
              </td>
              <td className="px-4 py-2">
                Low (must hold to maturity for full benefits)
              </td>
              <td className="px-4 py-2">
                Policy payouts tax-free
              </td>
              <td className="px-4 py-2">
                Varies: e.g. S$5k single premium or S$100+/mth
              </td>
              <td className="px-4 py-2">
                Insurance companies (Prudential, AIA, Great Eastern etc., via agents or banks)
              </td>
            </tr>
            {/* Row 7 */}
            <tr>
              <td className="px-4 py-2">
                Real Estate (Physical Property)
              </td>
              <td className="px-4 py-2">
                Long (5+ years recommended)
              </td>
              <td className="px-4 py-2">
                Medium (property cycle, leverage) / High (if highly leveraged)
              </td>
              <td className="px-4 py-2">
                ~2–3% rental yield
                <Citation
                  href="https://www.globalpropertyguide.com/asia/singapore/rental-yields#:~:text=Average%20gross%20rental%20yield%20in,22"
                  text=" GlobalPropertyGuide"
                />{" "}
                + historical ~3–5% price appreciation (not guaranteed)
              </td>
              <td className="px-4 py-2">
                Very Low (months to sell; high transaction costs)
              </td>
              <td className="px-4 py-2">
                No capital gains tax; rental income taxable (after deductions); stamp duties apply
              </td>
              <td className="px-4 py-2">
                High: ~S$300k+ (20–25% downpayment on a condo)
              </td>
              <td className="px-4 py-2">
                Property developers, real estate agencies (buy directly); requires mortgage for most
              </td>
            </tr>
            {/* Row 8 */}
            <tr>
              <td className="px-4 py-2">REITs (SGX-listed)</td>
              <td className="px-4 py-2">Medium to Long (3+ years)</td>
              <td className="px-4 py-2">
                Medium (market volatility, but asset-backed)
              </td>
              <td className="px-4 py-2">
                ~5–7% dividend yield
                <Citation
                  href="https://reitsavvy.com/insights/singapore-reits-monthly-update-08-december-2024#:~:text=,distribution%20yields%20of%20above%207"
                  text=" reitsavvy"
                />
                ; total return incl. price ~ can be 0–10% depending on market
              </td>
              <td className="px-4 py-2">
                High (traded daily on SGX)
              </td>
              <td className="px-4 py-2">
                Distributions tax-exempt for individuals
                <Citation
                  href=""
                  text=""
                />
              </td>
              <td className="px-4 py-2">
                ~S$300 (100 units of a low-priced REIT)
              </td>
              <td className="px-4 py-2">
                Stock brokers (DBS Vickers, FSMOne, Tiger, etc.)
              </td>
            </tr>
            {/* Row 9 */}
            <tr>
              <td className="px-4 py-2">
                Singapore Stocks (Equities)
              </td>
              <td className="px-4 py-2">
                Medium to Long (5+ years)
              </td>
              <td className="px-4 py-2">
                Medium to High (depends on stock)
              </td>
              <td className="px-4 py-2">
                Broadly 5–10% if well-diversified (STI historical ~7-8% incl dividends; 2024 was +23.5%
                <Citation
                  href="https://sbr.com.sg/stocks/news/sti-nets-235-returns-best-in-decade#:~:text=Yangzijiang%20Shipbuilding%20was%20the%20top,stock"
                  text=" SBR"
                />
                ); individual stocks can vary widely
              </td>
              <td className="px-4 py-2">
                High (traded on SGX, T+2 settlement)
              </td>
              <td className="px-4 py-2">
                No capital gains tax; no tax on local dividends
              </td>
              <td className="px-4 py-2">
                ~S$100–S$1000 (depending on share price, 100-unit lot)
              </td>
              <td className="px-4 py-2">
                Stock brokers (SGX trading platforms, bank or online brokers)
              </td>
            </tr>
            {/* Row 10 */}
            <tr>
              <td className="px-4 py-2">
                Exchange-Traded Funds (ETFs)
              </td>
              <td className="px-4 py-2">
                Medium to Long (5+ years)
              </td>
              <td className="px-4 py-2">
                Low to High (depends on index; broad index = medium risk)
              </td>
              <td className="px-4 py-2">
                Varies by index: e.g. STI ETF ~7% historic; S&P500 ~10% USD historic; bond ETFs ~3–4%
              </td>
              <td className="px-4 py-2">
                High (traded on exchange daily)
              </td>
              <td className="px-4 py-2">
                No tax on capital gains; foreign ETF dividends may have withholding tax
              </td>
              <td className="px-4 py-2">
                ~S$100+ (ETF units can be &lt;$5 each; 1 lot = 100 units)
              </td>
              <td className="px-4 py-2">
                Stock brokers (SGX for local ETFs; or U.S./HK exchanges via broker)
              </td>
            </tr>
            {/* Row 11 */}
            <tr>
              <td className="px-4 py-2">
                Unit Trusts (Mutual Funds)
              </td>
              <td className="px-4 py-2">
                Medium to Long (3+ years)
              </td>
              <td className="px-4 py-2">
                Low to High (choose fund per risk: e.g. bond fund vs equity fund)
              </td>
              <td className="px-4 py-2">
                Varies: bond funds ~3–5%; equity funds ~5–10% (active manager performance varies)
              </td>
              <td className="px-4 py-2">
                Medium (can redeem but not intraday; typically T+2/3 via platform)
              </td>
              <td className="px-4 py-2">
                No capital gains tax; distributions usually reinvested or not taxed to individuals
              </td>
              <td className="px-4 py-2">
                ~S$1000 (some platforms $100)
              </td>
              <td className="px-4 py-2">
                Fund platforms (FSMOne, iFAST) or banks/financial advisors; robo-advisors also use funds
              </td>
            </tr>
            {/* Row 12 */}
            <tr>
              <td className="px-4 py-2">
                Robo-Advisors (Managed Portfolios)
              </td>
              <td className="px-4 py-2">
                Long (ideal 5+ years, but flexible)
              </td>
              <td className="px-4 py-2">
                Low to High (user selects risk level)
              </td>
              <td className="px-4 py-2">
                Varies by portfolio: e.g. a 60/40 portfolio ~4–6%; 100% equity portfolio ~7–9% expected (subject to market fluctuations)
              </td>
              <td className="px-4 py-2">
                High (funds can be withdrawn in days)
              </td>
              <td className="px-4 py-2">
                No additional taxes; underlying ETFs/funds handle foreign taxes
              </td>
              <td className="px-4 py-2">
                Low: S$0 to S$100 (very low entry)
              </td>
              <td className="px-4 py-2">
                Robo platforms (Endowus, StashAway, Syfe, AutoWealth etc. – via mobile/web app)
              </td>
            </tr>
            {/* Row 13 */}
            <tr>
              <td className="px-4 py-2">Gold &amp; Commodities</td>
              <td className="px-4 py-2">
                Short to Long (often held during specific cycles or as hedge)
              </td>
              <td className="px-4 py-2">
                Medium (volatile, but no default risk)
              </td>
              <td className="px-4 py-2">
                No yield (gold); price appreciation ~0–10% depending on cycle (e.g. gold +20% in 2020
                <Citation
                  href="https://www.garfieldrefining.com/resources/blog/history-of-gold-prices/#:~:text=COVID,record%20high"
                  text=" Garfieldrefining"
                />
                , hit record high 2024
                <Citation
                  href="https://www.garfieldrefining.com/resources/blog/history-of-gold-prices/#:~:text=Overall%2C%202024%20has%20been%20a,a%20new%20high%20of%20%242%2C747"
                  text=" Garfieldrefining"
                />
                )
              </td>
              <td className="px-4 py-2">
                High for financial instruments (instant for ETFs; 1-2 days for gold account); physical gold moderate (need to find buyer)
              </td>
              <td className="px-4 py-2">
                No capital gains tax; no GST on investment-grade gold; no dividend (except commodity ETFs that might roll yield)
              </td>
              <td className="px-4 py-2">
                Low for ETFs (price of 1 share, e.g. ~$180 for 1 unit of GLD ~1/10 oz); Physical gold varies (small bars/coins from S$2k)
              </td>
              <td className="px-4 py-2">
                Gold ETFs (SGX: GLD, etc.) via brokers; Gold savings accounts (UOB); Physical from bullion dealers or banks
              </td>
            </tr>
            {/* Row 14 */}
            <tr>
              <td className="px-4 py-2">Cryptocurrency</td>
              <td className="px-4 py-2">
                Long (if investing; short-term trading is extremely risky)
              </td>
              <td className="px-4 py-2">
                High to Very High (extreme volatility)
              </td>
              <td className="px-4 py-2">
                Highly unpredictable: could be –50% to +200% in a year; e.g. Bitcoin ~+300% in 2020, –65% in 2022, etc.
              </td>
              <td className="px-4 py-2">
                High (24/7 trading, can liquidate anytime on exchanges)
              </td>
              <td className="px-4 py-2">
                No capital gains tax currently; crypto not legal tender; overseas platform use is legal but not protected
              </td>
              <td className="px-4 py-2">
                Very low (you can start with S$10–S$100 on many exchanges)
              </td>
              <td className="px-4 py-2">
                MAS-licensed exchanges (Coinhako, etc.) or international exchanges (with caution); require bank transfer/PayNow to fund
              </td>
            </tr>
            {/* Row 15 */}
            <tr>
              <td className="px-4 py-2">
                Private Equity / Venture Capital
              </td>
              <td className="px-4 py-2">
                Very Long (5–10+ years)
              </td>
              <td className="px-4 py-2">
                Very High (most startups fail; high illiquidity)
              </td>
              <td className="px-4 py-2">
                Wide range: could be –100% (total loss) or 10x (1000%) if startup succeeds; PE funds target ~15–20% IRR but not guaranteed
              </td>
              <td className="px-4 py-2">
                Ultra Low (funds locked until exit; no active market to sell)
              </td>
              <td className="px-4 py-2">
                No tax on capital gains; no dividend tax (if structured properly); typically for accredited investors only
              </td>
              <td className="px-4 py-2">
                Very high: often S$50k+ per deal (angel); PE funds require S$250k–S$1M+ commitments
              </td>
              <td className="px-4 py-2">
                Angel investing networks, equity crowdfunding (FundedHere etc.) for small investments; PE/VC funds (accredited investors via private banks or fund managers)
              </td>
            </tr>
            {/* Row 16 */}
            <tr>
              <td className="px-4 py-2">
                International Stocks/ETFs
              </td>
              <td className="px-4 py-2">
                Medium to Long (5+ years)
              </td>
              <td className="px-4 py-2">
                Medium to High (market risk + currency risk)
              </td>
              <td className="px-4 py-2">
                Varies by market: e.g. U.S. large-cap ~8–10%; Emerging markets maybe higher but volatile
              </td>
              <td className="px-4 py-2">
                High (if listed on major exchanges, can trade anytime)
              </td>
              <td className="px-4 py-2">
                No SG tax on gains; foreign withholding tax on dividends (e.g. US stocks 30% withholding)
              </td>
              <td className="px-4 py-2">
                Low: e.g. 1 share of US stock (many brokers allow fractional shares too)
              </td>
              <td className="px-4 py-2">
                Brokers with global access (Saxo, Interactive Brokers, Tiger, local banks’ int’l trading services)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
