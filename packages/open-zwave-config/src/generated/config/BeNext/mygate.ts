import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/008A:0100:0001",
            name: "OzwInfoPage",
          },
          { text: "images/BeNext/mygate.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/53/",
            id: "0100",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text: "BeNeXt / Internet Gateway",
            id: "0100",
            name: "Identifier",
            type: "0001",
          },
          {
            text: "http://www.benext.eu/en/products/internet-gateway/",
            name: "ProductPage",
          },
          { text: "info@Benext.eu", name: "ProductSupport" },
          {
            text:
              "The Benext Internet Gateway is a static controller with Internet connection.\nIt is configured with lifestyles and rules for different scenes and operates with the BeNext Framework.\n\nConnect the Internet Gateway onto your Smart meter and start reading out data, completely independent from your local power supplier. The Gateway gives you access to our famed free of charge online manager. In this online environment you can, among many other features, set up energy targets, read out and compare revenues from installed solar panels and manage your use of gas. The more BeNext products you will use and install on the Gateway the better you’ll be able to automate big savings and broaden luxury and safety features.",
            name: "Description",
          },
          { text: "Internet Gateway", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "0100",
            name: "FrequencyName",
            type: "0001",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/53/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 1,
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
