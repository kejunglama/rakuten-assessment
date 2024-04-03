import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Link,
} from "@mui/material";
interface CatalogItemProps {
  item: string;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ item }) => {
  const product = JSON.parse(JSON.stringify(item));

  return (
    <Card
      variant="outlined"
      sx={{
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0)",
        borderRadius: "10px",
        textAlign: "left",
        textDecoration: "none",
        color: "inherit",
        transition: "0.3s",
        "&:hover": {
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          transition: "box-shadow 0.3s ease-in-out",
        },
      }}
    >
      <a
        href={product.href}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={4} display={"flex"} justifyContent={"center"}>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
              sx={{ objectFit: "contain", height: "120px", width: "120px" }}
            />
          </Grid>
          <Grid item xs={8}>
            <CardContent>
              <Typography variant="body2">{product.brand}</Typography>
              <Typography variant="body1" fontWeight="bold">
                {product.title}
              </Typography>
              <Typography variant="body1">{product.price}</Typography>
              {/* <Typography variant="body1" color="text.secondary">
              {product.href}
            </Typography> */}
              <Typography
                variant="body1"
                color="text.primary"
                style={{
                  fontSize: 20,
                  fontWeight: "bolder",
                }}
              >
                {product.newPrice}
                <span style={{ fontSize: 12 }}> Neuf</span>
              </Typography>
              <Typography
                variant="body1"
                style={{ fontSize: 20, fontWeight: "bolder" }}
              >
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: "normal",
                    color: "#696969",
                  }}
                >
                  Occasion dès{" "}
                </span>
                {product.usedPrice}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </a>
    </Card>
  );
};

export default CatalogItem;
