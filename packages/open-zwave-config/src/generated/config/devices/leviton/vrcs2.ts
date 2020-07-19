import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/001D:0206:0201",
            name: "OzwInfoPage",
          },
          { text: "images/leviton/vrcs2.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/288/",
            id: "0206",
            name: "ZWProductPage",
            type: "0201",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0206",
            name: "FrequencyName",
            type: "0201",
          },
          {
            text:
              "The Vizia RF + 4-Button Zone Controller with Switch (VRCZ4-MR) and 4-Button Scene Controller with Switch (VRCS4-MR) are perfect for retrofit applications because they replace an existing switch giving the user control of the local load as well as the benefit of scene or zone control.\n Item Description\nVizia RF + 4-Button Zone Controller with Switch for Multi-Location Control with IR Remote Capability. White face assembled on device, ivory and light almond faces included.",
            name: "Description",
          },
          {
            text:
              "http://www.leviton.com/OA_HTML/ProductDetail.jsp?partnumber=VRCZ4-MRZ&section=44147&minisite=10251",
            name: "ProductPage",
          },
          { text: "VRCZ4-MR", id: "0206", name: "Identifier", type: "0201" },
          {
            text:
              "http://www.leviton.com/OA_HTML/Home.jsp?minisite=10251&respid=22372",
            name: "ProductSupport",
          },
          { text: "VRCZ4-MR", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/286/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 1,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/287/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/288/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [{ id: "112" }],
  },
};

export default config;
