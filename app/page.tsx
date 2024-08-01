export default function Home() {
  return (
    <div className="p-5 medi">
      <div className="border-b-2 border-slate-300 pb-2 mb-5">
        <strong className="flex items-center gap-2">
          March 2021
          <span className="inline-block size-5">
            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
            </svg>
          </span>
        </strong>
      </div>
      <div>
        <div className="title_area text-center *:font-medium leading-5 mb-6">
          <h2>Hello, Bruno!</h2>
          <p>Your medicines for today</p>
        </div>
        <div className="date_area">
          <ul className="list_date flex w-full justify-evenly">
            <li>
              <strong>16</strong>
              <p>Mon</p>
            </li>
            <li>
              <strong>17</strong>
              <p>Tue</p>
            </li>
            <li className="active">
              <strong>18</strong>
              <p>Wed</p>
            </li>
            <li>
              <strong>19</strong>
              <p>Thu</p>
            </li>
            <li>
              <strong>20</strong>
              <p>Fri</p>
            </li>
            <li>
              <strong>21</strong>
              <p>Sat</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="card_area">
        <ul className="list_card">
          <li className="active">
            <div className="card_info">
              <div className="t_area">
                <h3>Nora - BE</h3>
                <p>Norentindrone - 0.35mg</p>
              </div>
              <div className="b_area">
                <span>7h30AM</span>
              </div>
            </div>
          </li>
          <li>
            <div className="card_info">
              <div className="t_area">
                <h3>Feosol</h3>
                <p>Ferrous Sulfate - 600mg</p>
              </div>
              <div className="b_area">
                <span>7h30PM</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
