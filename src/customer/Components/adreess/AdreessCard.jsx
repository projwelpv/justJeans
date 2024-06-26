import React from "react";
// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";
// import HomeIcon from "@mui/icons-material/Home";
const AddressCard = ({ address }) => {
  console.log("address", address);
  return (
    <div>
      <h1 className="text-lg font-semibold py-4">Delivery Adress</h1>
      <div className="space-y-3">
        <p className="font-semibold">
          {/* <HomeIcon sx={{ mr: 1, color: "gray" }} /> */}
          {`${address?.firstName} ${address?.lastName}`}
        </p>

        <p>
          {`${address?.addressLine ? address?.addressLine?.[0] : ""} ${
            address?.addressLine?.[1]
          } ${address?.city} ${address?.state} ${address?.zipCode}`}
        </p>
        {/* <p>banglore</p> */}

        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>
            {/* <PhoneIcon sx={{ mr: 1, color: "gray" }} /> */}

            {address?.phone1}
          </p>
          {/* <p>984748558474</p> */}
        </div>
        <div className="space-y-1">
          <p className="font-semibold">Email Address</p>
          <p>{address?.email1}</p>
          {/* <p>984748558474</p> */}
        </div>
      </div>
    </div>
  );
};

// export default AddressCard;

// import React from "react";
// import { Box, Typography, Paper, Divider, Grid } from "@mui/material";
// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";
// import HomeIcon from "@mui/icons-material/Home";

// Default address data
// const defaultAddress = {
//   lastName: "Garcia",
//   zipCode: "12345",
//   firstName: "Juan",
//   email1: "juang@example.com",
//   city: "Mexico City",
//   addressType: "ShippingAndBilling",
//   nickName: "Juan",
//   state: "Mexico City",
//   addressLine: ["Av. Insurgentes Sur 123", "Col. Condesa", ""],
//   addressId: "3074457365572057425",
//   primary: "false",
//   phone1: "5543219876"
// };

// Utility function to parse and validate the address data
// const parseAddress = (address = {}) => {
//   return {
//     firstName: address.firstName || "",
//     lastName: address.lastName || "",
//     addressLine: Array.isArray(address.addressLine)
//       ? address.addressLine.filter((line) => line)
//       : [],
//     city: address.city || "",
//     state: address.state || "",
//     zipCode: address.zipCode || "",
//     phone1: address.phone1 || "",
//     email1: address.email1 || "",
//   };
// };

// const AddressCard = ({ address }) => {
//   // const parsedAddress = parseAddress(address || defaultAddress);
//   // console.log(address);

//   return (
//     <Paper elevation={5} sx={{ padding: 3, borderRadius: 2 }}>
//       <Typography
//         variant="h6"
//         component="h1"
//         sx={{ fontWeight: "bold", pb: 2 }}
//       >
//         Delivery Address
//       </Typography>
//       <Divider sx={{ mb: 2 }} />
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Typography variant="body1" component="p" sx={{ fontWeight: "bold" }}>
//             {`${address?.firstName} ${address?.lastName}`}
//           </Typography>
//         </Grid>
//         <Grid item xs={12}>
//           <Box sx={{ display: "flex", alignItems: "center" }}>
//             <HomeIcon sx={{ mr: 1, color: "gray" }} />
//             <Box>
//               <Typography
//                 variant="body1"
//                 component="p"
//                 sx={{ fontWeight: "bold" }}
//               >
//                 Address
//               </Typography>
//               {/* {parsedAddress.addressLine.map((line, index) => ( */}
//               <Typography variant="body2" component="p">
//                 {`${address?.addressLine?.[0]} ${address?.addressLine?.[1]}`}
//               </Typography>
//               {/* ))} */}
//               <Typography variant="body2" component="p">
//                 {`${address?.city} ${address?.state} ${address?.zipCode}`}
//               </Typography>
//             </Box>
//           </Box>
//         </Grid>
//         <Grid item xs={12}>
//           <Box sx={{ display: "flex", alignItems: "center" }}>
//             <PhoneIcon sx={{ mr: 1, color: "gray" }} />
//             <Box>
//               <Typography
//                 variant="body1"
//                 component="p"
//                 sx={{ fontWeight: "bold" }}
//               >
//                 Phone Number
//               </Typography>
//               <Typography variant="body2" component="p">
//                 {address?.phone1}
//               </Typography>
//             </Box>
//           </Box>
//         </Grid>
//         <Grid item xs={12}>
//           <Box sx={{ display: "flex", alignItems: "center" }}>
//             <EmailIcon sx={{ mr: 1, color: "gray" }} />
//             <Box>
//               <Typography
//                 variant="body1"
//                 component="p"
//                 sx={{ fontWeight: "bold" }}
//               >
//                 Email
//               </Typography>
//               <Typography variant="body2" component="p">
//                 {address?.email1}
//               </Typography>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// };

export default AddressCard;
