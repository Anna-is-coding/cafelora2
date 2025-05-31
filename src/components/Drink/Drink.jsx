import './Drink.css';

export const Drink = ({ id, name, ordered, image, layers }) => (
  <div className="drinks-list">
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={image} alt={name} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          <div className="layer">
            <div
              className="layer__color"
              style={{ backgroundColor: '#613916' }}
            ></div>
            <div className="layer__label">espresso</div>
          </div>
        </div>
      </div>
      <form className="drink__controls">
        <input type="hidden" className="order-id" value="0" />
        <button className="order-btn">Objednat</button>
      </form>
    </div>

    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src="/cups/doppio.png" />
        </div>
        <div className="drink__info">
          <h3>Doppio</h3>
          <div className="layer">
            <div
              className="layer__color"
              style={{ backgroundColor: '#613916' }}
            />
            <div className="layer__label">espresso</div>
          </div>
        </div>
      </div>
      <form className="drink__controls">
        <input type="hidden" className="order-id" value="1" />
        <button className="order-btn">Objednat</button>
      </form>
    </div>

    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src="/cups/lungo.png" />
        </div>
        <div className="drink__info">
          <h3>Lungo</h3>
          <div className="layer">
            <div
              className="layer__color"
              style={{ backgroundColor: '#b0dee1' }}
            />
            <div className="layer__label">voda</div>
          </div>
          <div className="layer">
            <div
              className="layer__color"
              style={{ backgroundColor: '#613916' }}
            />
            <div className="layer__label">espresso</div>
          </div>
        </div>
      </div>
      <form className="drink__controls">
        <input type="hidden" className="order-id" value="2" />
        <button className="order-btn">Objednat</button>
      </form>
    </div>
  </div>
);
