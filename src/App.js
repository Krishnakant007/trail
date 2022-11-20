import "./App.css";

function App() {
  const phonePrice = 999;
  const laptopPrice = 5000;
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_2Fo80uXzhmFbnS",
      currency: "INR",
      amount: amount * 100,
      name: "fashtry",
      description: "Thanks for purchasing",
      image:
        "https://mern-blog-akky.herokuapp.com/static/media/logo.8c649bfa.png",

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Payment Successfully");
      },
      prefill: {
        name: "fashtry",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <div className="App">
      <div className="product">
        <>
          <div className="prod-container">
            <div className="left-container">
              <div className="prod-container-left">
                <img
                  src="https://m.media-amazon.com/images/I/61-jBuhtgZL._UL1500_.jpg"
                  alt="pimage"
                />
              </div>
            </div>

            <div className="prod-container-right">
              <div className="prod-container-info">
                <h1>Full sleeve T-shirt</h1>
                <div className="itemOption__rating">
                  <p>4.6</p>
                  <span>
                    <img
                      src="https://img.icons8.com/fluency/2x/star.png"
                      alt=""
                    />
                  </span>
                </div>
                <p>{formatter.format(phonePrice)}</p>
              </div>
            </div>
            <div className="buttons">
              <button onClick={() => displayRazorpay(phonePrice)}>
                BUY NOW
              </button>
            </div>
          </div>

          <div className="prod-container">
          <div className="left-container">
            <div className="prod-container-left">
              <img
                src="https://www.mydesignation.com/wp-content/uploads/2019/08/malayali-tshirt-mydesignation-mockup-image-latest-golden-.jpg"
                alt="pimage"
              />
            </div>
          </div>

          <div className="prod-container-right">
            <div className="prod-container-info">
              <h1>Black Half Sleeve t-Shirt</h1>
              <div className="itemOption__rating">
                <p>4.6</p>
                <span>
                  <img
                    src="https://img.icons8.com/fluency/2x/star.png"
                    alt=""
                  />
                </span>
              </div>
              <p>{formatter.format(phonePrice)}</p>
            </div>
          </div>
          <div className="buttons">
            <button onClick={() => displayRazorpay(phonePrice)}>
              BUY NOW
            </button>
          </div>
          </div>
          
          <div className="prod-container">
          <div className="left-container">
            <div className="prod-container-left">
              <img
                src="https://www.mydesignation.com/wp-content/uploads/2019/06/but-why-tshirt-mydesignation-image-latest.jpg"
                alt="pimage"
              />
            </div>
          </div>

          <div className="prod-container-right">
            <div className="prod-container-info">
              <h1>Red Color T-shirt</h1>
              <div className="itemOption__rating">
                <p>4.6</p>
                <span>
                  <img
                    src="https://img.icons8.com/fluency/2x/star.png"
                    alt=""
                  />
                </span>
              </div>
              <p>{formatter.format(phonePrice)}</p>
            </div>
          </div>
          <div className="buttons">
            <button onClick={() => displayRazorpay(phonePrice)}>
              BUY NOW
            </button>
          </div>
          </div>
          <div className="prod-container">
          <div className="left-container">
            <div className="prod-container-left">
              <img
                src="https://cdn.shopify.com/s/files/1/2798/7708/products/ButWhyTshirt.jpg?v=1595420322"
                alt="pimage"
              />
            </div>
          </div>

          <div className="prod-container-right">
            <div className="prod-container-info">
              <h1>Green-color t-shirt</h1>
              <div className="itemOption__rating">
                <p>4.6</p>
                <span>
                  <img
                    src="https://img.icons8.com/fluency/2x/star.png"
                    alt=""
                  />
                </span>
              </div>
              <p>{formatter.format(phonePrice)}</p>
            </div>
          </div>
          <div className="buttons">
            <button onClick={() => displayRazorpay(phonePrice)}>
              BUY NOW
            </button>
          </div>
          </div>
          <div className="prod-container">
          <div className="left-container">
            <div className="prod-container-left">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN5hNac42yZR3pW4D9zRsRzz7KZy7nTPm3OIFI_WbGoDVEZwI2AVIHrNCKKWNM0fOJx4o&usqp=CAU"
                alt="pimage"
              />
            </div>
          </div>

          <div className="prod-container-right">
            <div className="prod-container-info">
              <h1>Black-Color T-Shirt new </h1>
              <div className="itemOption__rating">
                <p>4.6</p>
                <span>
                  <img
                    src="https://img.icons8.com/fluency/2x/star.png"
                    alt=""
                  />
                </span>
              </div>
              <p>{formatter.format(phonePrice)}</p>
            </div>
          </div>
          <div className="buttons">
            <button onClick={() => displayRazorpay(phonePrice)}>
              BUY NOW
            </button>
          </div>
          </div>
          <div className="prod-container">
          <div className="left-container">
            <div className="prod-container-left">
              <img
                src="https://www.mydesignation.com/wp-content/uploads/2020/01/royal-blue-plain-tshirt-mydesignation-unisex-image.jpg"
                alt="pimage"
              />
            </div>
          </div>

          <div className="prod-container-right">
            <div className="prod-container-info">
              <h1>Plain-Blue T-shirt</h1>
              <div className="itemOption__rating">
                <p>4.6</p>
                <span>
                  <img
                    src="https://img.icons8.com/fluency/2x/star.png"
                    alt=""
                  />
                </span>
              </div>
              <p>{formatter.format(phonePrice)}</p>
            </div>
          </div>
          <div className="buttons">
            <button onClick={() => displayRazorpay(phonePrice)}>
              BUY NOW
            </button>
          </div>
          </div>
          <div className="prod-container">
          <div className="left-container">
            <div className="prod-container-left">
              <img
                src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1667976056_6665706.jpg"
                alt="pimage"
              />
            </div>
          </div>

          <div className="prod-container-right">
            <div className="prod-container-info">
              <h1>Light Green T-shirt</h1>
              <div className="itemOption__rating">
                <p>4.6</p>
                <span>
                  <img
                    src="https://img.icons8.com/fluency/2x/star.png"
                    alt=""
                  />
                </span>
              </div>
              <p>{formatter.format(phonePrice)}</p>
            </div>
          </div>
          <div className="buttons">
            <button onClick={() => displayRazorpay(phonePrice)}>
              BUY NOW
            </button>
          </div>
          </div>
          <div className="prod-container">
          <div className="left-container">
            <div className="prod-container-left">
              <img
                src="https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/D92B1019EE2241839D3F150A48FB11CB/M10186027_4.jpg?fit=inside|540:540"
                alt="pimage"
              />
            </div>
          </div>

          <div className="prod-container-right">
            <div className="prod-container-info">
              <h1>Red T-shirt</h1>
              <div className="itemOption__rating">
                <p>4.6</p>
                <span>
                  <img
                    src="https://img.icons8.com/fluency/2x/star.png"
                    alt=""
                  />
                </span>
              </div>
              <p>{formatter.format(phonePrice)}</p>
            </div>
          </div>
          <div className="buttons">
            <button onClick={() => displayRazorpay(phonePrice)}>
              BUY NOW
            </button>
          </div>
          </div>
          <div className="prod-container">
          <div className="left-container">
            <div className="prod-container-left">
              <img
                src="https://media.istockphoto.com/id/934213808/photo/black-t-shirt-mock-up-on-wooden-hanger-rear-side-view.jpg?s=170667a&w=0&k=20&c=A1Dfhxx-C1mXArMVyT3f8aZ6h56E_h96VsNIh-0wWvE="
                alt="pimage"
              />
            </div>
          </div>

          <div className="prod-container-right">
            <div className="prod-container-info">
              <h1>Classy Black T-Shirt</h1>
              <div className="itemOption__rating">
                <p>4.6</p>
                <span>
                  <img
                    src="https://img.icons8.com/fluency/2x/star.png"
                    alt=""
                  />
                </span>
              </div>
              <p>{formatter.format(phonePrice)}</p>
            </div>
          </div>
          <div className="buttons">
            <button onClick={() => displayRazorpay(phonePrice)}>
              BUY NOW
            </button>
          </div>
        </div>

        </>
      </div>
      <div className="product">
        <>
          <div className="prod-container">
            <div className="left-container">
              <div className="prod-container-left">
                <img
                  src="https://estilofashions.com/wp-content/uploads/2021/02/Mens-Jeans-Pant-2-3.jpg"
                  alt="pimage"
                />
              </div>
            </div>

            <div className="prod-container-right">
              <div className="prod-container-info">
                <h1>double durable Jeans</h1>
                <div className="itemOption__rating">
                  <p>4.5</p>
                  <span>
                    <img
                      src="https://img.icons8.com/fluency/2x/star.png"
                      alt=""
                    />
                  </span>
                </div>
                <p>{formatter.format(laptopPrice)}</p>
              </div>
            </div>
            <div className="buttons">
              <button onClick={() => displayRazorpay(laptopPrice)}>
                BUY NOW
              </button>
            </div>
          </div>
        </>
        
      </div>
    </div>
  );
}

export default App;
