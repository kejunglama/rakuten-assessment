import CatalogItem from "./CatalogItem";
import { Grid, Typography } from "@mui/material";

interface CatalogProps {
  items: string[];
}

const Catalog: React.FC<CatalogProps> = ({ items }) => {
  return (
    <div>
      <Typography variant="h3" padding={2} color="text.primary">
        <span style={{ color: "#000" }}>Our </span> Catalog
      </Typography>
      <Grid
        container
        spacing={2}
        padding={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {items && items.length > 0 ? (
          items.map((item: string, index: number) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <CatalogItem item={item} />
            </Grid>
          ))
        ) : (
          <p>Still Shipping ;)</p>
        )}
      </Grid>
    </div>
  );
};

export default Catalog;
