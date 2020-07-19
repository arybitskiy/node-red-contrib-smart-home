import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          { text: "P1 Dongle", name: "Name" },
          {
            text:
              "If your Internet Gateway is not in the vicinity of the smart meter, you can use a P1-dongle. The P1-dongle sends data wirelessly to the Internet Gateway. This data is shown in your BeNext application and online environment. Here you can get insight of your consumption and things like the overall yield of your solar panels.\n\nSupport:\nThe P1-dongle can connect to smart meters that support DSMR (Dutch Smart Meter Reader Protocol). We support all smart meters* with a P1-connector.\nThe following smart meter brands have this connection: Kaifa, Kamstrup, Landis & Gyr, Elster and Iskra.\n* DSMR2, 4 and 5\n\nFor more information about smart meters: https://www.benext.eu/producten/slimme-meter/.\nOrder a special adapter for DSMR2.x meters.",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/008A:0100:002F",
            name: "OzwInfoPage",
          },
          {
            text: "https://www.benext.eu/en/products/p1-dongle/",
            name: "ProductPage",
          },
          { text: "https://support.benext.eu/", name: "ProductSupport" },
          { text: "images/BeNext/P1dongle.png", name: "ProductPic" },
          {
            text: "https://www.benext.eu/static/manual/P1_dongle-nl.pdf",
            name: "ProductManual",
          },
          {
            text: "CEPT (Europe)",
            id: "0100",
            name: "FrequencyName",
            type: "002F",
          },
          { text: "P1 Dongle", id: "0100", name: "Identifier", type: "002F" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Added Metadata as of template, removed commandclass ID 50, should be interviewed, changed max_associations of lifeline group as of manual",
                author: "Olifant1990 - olifant1990@jo-ro.nl",
                date: "20 September 2019",
                revision: 4,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Set to Default",
            size: "1",
            type: "byte",
            Help:
              "Set all configuration values to default values (factory settings).",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "HW Pullup",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "For some Smart meters you will need an external pullup resistor to receive the data, one of it is the Kaifa meter. 0x00: disabled. 0x01-0xFF: enabled (default 0x00)",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Baud rate",
            size: "2",
            type: "short",
            value: "1152",
            Help: "value x 100 = baud rate",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Data validation",
            size: "1",
            type: "byte",
            value: "51",
            Help:
              "Settings for data validation LED. Bit 7-4: Data received timeout (x 10). Bit 3-0: Framecount when data is valid (default 0x33 (0x30|0x03))",
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "CRC check",
            size: "1",
            type: "list",
            value: "1",
            Help: "",
            Item: [
              { label: "CRC check enabled", value: "1" },
              { label: "CRC check disabled", value: "0" },
            ],
          },
          {
            genre: "config",
            index: "72",
            instance: "1",
            label: "Channel 1 auto Meter report usage W",
            size: "4",
            type: "int",
            value: "1290",
            Help:
              "Conditions current usage will be automatically reported. Param 1-3: Difference in absolute value. Param 4: Difference in percentage between previous and current value. (default 0x0000050A (5Watt and 10%))",
          },
          {
            genre: "config",
            index: "73",
            instance: "1",
            label: "Channel 1 auto Meter report usage kWh",
            size: "4",
            type: "int",
            value: "25600",
            Help:
              "Conditions current usage will be automatically reported. Param 1-3: Difference in absolute value. Param 4: Difference in percentage between previous and current value. (default 0x00006400 (0.1kWh and 0%))",
          },
          {
            genre: "config",
            index: "74",
            instance: "1",
            label: "Channel 1 auto Meter report delivered W",
            size: "4",
            type: "int",
            value: "1290",
            Help:
              "Conditions current delivered will be automatically reported. Param 1-3: Difference in absolute value. Param 4: Difference in percentage between previous and current value. (default 0x0000050A (5Watt and 10%))",
          },
          {
            genre: "config",
            index: "75",
            instance: "1",
            label: "Channel 1 auto Meter report delivered kWh",
            size: "4",
            type: "int",
            value: "25600",
            Help:
              "Conditions current delivered will be automatically reported. Param 1-3: Difference in absolute value. Param 4: Difference in percentage between previous and current value. (default 0x00006400 (0.1kWh and 0%))",
          },
          {
            genre: "config",
            index: "76",
            instance: "1",
            label: "Channel 2 auto Meter report usage W",
            size: "4",
            type: "int",
            value: "1290",
            Help:
              "Conditions current usage will be automatically reported. Param 1-3: Difference in absolute value. Param 4: Difference in percentage between previous and current value. (default 0x0000050A (5Watt and 10%))",
          },
          {
            genre: "config",
            index: "77",
            instance: "1",
            label: "Channel 2 auto Meter report usage kWh",
            size: "4",
            type: "int",
            value: "25600",
            Help:
              "Conditions current usage will be automatically reported. Param 1-3: Difference in absolute value. Param 4: Difference in percentage between previous and current value. (default 0x00006400 (0.1kWh and 0%))",
          },
          {
            genre: "config",
            index: "78",
            instance: "1",
            label: "Channel 2 auto Meter report delivered W",
            size: "4",
            type: "int",
            value: "1290",
            Help:
              "Conditions current delivered will be automatically reported. Param 1-3: Difference in absolute value. Param 4: Difference in percentage between previous and current value. (default 0x0000050A (5Watt and 10%))",
          },
          {
            genre: "config",
            index: "79",
            instance: "1",
            label: "Channel 2 auto Meter report delivered kWh",
            size: "4",
            type: "int",
            value: "25600",
            Help:
              "Conditions current delivered will be automatically reported. Param 1-3: Difference in absolute value. Param 4: Difference in percentage between previous and current value. (default 0x00006400 (0.1kWh and 0%))",
          },
          {
            genre: "config",
            index: "81",
            instance: "1",
            label: "Channel 3 auto Meter report usage m3",
            size: "4",
            type: "int",
            value: "25600",
            Help:
              "Conditions total used will be automatically reported. Param 1-3: Difference in absolute value. Param 4: Difference in percentage between previous and current value. (default 0x00006400 (0.1m3 and 0%))",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "LifeLine", max_associations: "1" }],
          },
        ],
      },
    ],
  },
};

export default config;
