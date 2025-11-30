function Input({
    label,
    amount,
    onAmountChange,
    currencyOptions = [],
    selectCurrency = 'pkr',
    

    className = '',
}){


    return <div class="main">
    <div class="container">
      <form>
        <div class="input-group">
          <label for="from">{label}</label>
          <input type="text" id="from" placeholder="Enter amount" value={amount} />
          <select>
            <option>USD</option>
            <option>PKR</option>
            <option>EUR</option>
          </select>
        </div>

        <div class="swap-btn-container">
          <button type="button" class="swap-btn">swap</button>
        </div>

        <div class="input-group">
          <label for="to">To</label>
          <input type="text" id="to" placeholder="Converted amount"   />
          <select>
            <option>USD</option>
            <option>PKR</option>
            <option>EUR</option>
          </select>
        </div>

        <button type="submit" class="convert-btn">Convert</button>
      </form>
    </div>
  </div>
}

export default Input;
