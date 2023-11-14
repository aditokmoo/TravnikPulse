import { BiPlus } from "react-icons/bi";
import ReturnButton from "../../../components/ReturnButton/ReturnButton";
import { useGetAllShops } from "../../../hooks/useShops.js";
import ShopComponent from "../ShopComponent/ShopComponent.jsx";
import styles from "./Page.module.scss";
import { useNavigate } from "react-router-dom";
import Spinner from "../../../components/Spinner/Spinner.jsx";

export default function Page() {
  const { data: shops, isLoading } = useGetAllShops();
  const navigate = useNavigate();
  if (isLoading) return <Spinner />;

  const allShopsGrouped = Object.entries(groupShopsByCategory(shops));

  return (
    <>
      <ReturnButton />
      <section className={styles.sectionBody}>
        <h2>Shops</h2>
        <div className={styles.shopsWrapper}>
          {allShopsGrouped.map((shop, i) => {
            return (
              <div key={i} className={styles.categoryWrapper}>
                <p className={styles.category}>{shop[0]}</p>
                <div className={styles.grid}>
                  {shop[1].map((s, i) => (
                    <ShopComponent shop={s} key={i} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <button
        className={styles.createShop}
        onClick={() => navigate("/app/admin/shops/create-shop")}
      >
        <BiPlus />
      </button>
    </>
  );
}

function groupShopsByCategory(shopsArray) {
  // Use reduce to group the shops by category
  const groupedShops = shopsArray.reduce((result, shop) => {
    // Check if the category already exists in the result
    if (!result[shop.category]) {
      // If not, create a new array for that category
      result[shop.category] = [];
    }
    // Push the shop to the category array
    result[shop.category].push(shop);
    return result;
  }, {});

  return groupedShops;
}

// Group all the shops by category
