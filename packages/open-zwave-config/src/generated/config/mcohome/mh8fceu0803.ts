import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          { text: "MH8-FC", name: "Name" },
          {
            text:
              "Fan Coil Thermostat MH8 is a Z-Wave Plus enabled device for indoor temperature control. \n\nIt is mainly applied to a 2-pipe Fan coil system. \n\nIt can read room temperature and local time, \n\nand automatically control fan speed based on the temperature difference. \n\nThe device is of high reliability and practicability. \n\nThis product can be included and operated \n\nin any Z-Wave network with other Z-Wave certified devices \n\nfrom any other manufacturers.",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/015f:5102:0803",
            name: "OzwInfoPage",
          },
          {
            text: "http://www.mcohome.com/ProductDetail/3894174.html",
            name: "ProductPage",
          },
          {
            text: "http://www.mcohome.com/ProductDetail/3894174.html",
            name: "ProductSupport",
          },
          { text: "images/mcohome/mh8fceu0803.png", name: "ProductPic" },
          {
            text:
              "http://www.mcohome.com/index.php?c=Front/DownDetail&a=downloadFujian&name=MH8-FC%20/%20MH8-FC4&path=L2NvbWRhdGEvOTUzMDEvcHJvZHVjdGZ1amlhbi8yMDIwMDYwMzE1MDQwNjVlZDc0YjY2MjRmODkucGRm",
            name: "ProductManual",
          },
          { text: "mh8fceu", id: "5102", name: "Identifier", type: "0803" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial Metadata Import",
                author: "Kostas Injeyan - kostas2911@yahoo.gr",
                date: "24 June 2020",
                revision: 1,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "67",
        Compatibility: [{ Base: [0], AltTypeInterpretation: [false] }],
      },
      {
        id: "68",
        Instance: [{ index: "1" }],
        Value: [
          {
            genre: "user",
            index: "0",
            instance: "1",
            label: "Fan Mode",
            size: "1",
            type: "list",
            units: "",
            Item: [
              { label: "On Low", value: "1" },
              { label: "On High", value: "3" },
              { label: "On Medium", value: "5" },
            ],
          },
        ],
        SupportedModes: [
          {
            Mode: [
              { index: "1", label: "On Low" },
              { index: "3", label: "On High" },
              { index: "5", label: "On Medium" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "1" }],
          },
        ],
      },
    ],
  },
};

export default config;
