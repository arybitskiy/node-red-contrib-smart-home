import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0096:0001:0001",
            name: "OzwInfoPage",
          },
          { text: "images/northq/nq92021.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/69/",
            id: "0001",
            name: "ZWProductPage",
            type: "0001",
          },
          { text: "http://northq.com/qpower/", name: "ProductPage" },
          {
            text:
              "NorthQ has developed a small Power Reader that can be easily installed on existing electronic or mechanical meters in order to visualize electricity consumption in private homes. The meter reading solution is based on the Z-Wave wireless standard, which is ideal for controlling automation products within the home.\n\nThe product consists of 3 parts: a Power Reader, a battery-powered wireless transmitter and a USB receiver. Electricity data is transferred to a chosen PC every 15 minutes, where it can then be visualized in the form of graphs, enabling customers to keep track of their electricity consumption (in kWh and in local currency), and monitor their CO2 emissions, etc. It is also possible to receive real-time measurements in order to investigate how much each individual appliance uses in active or standby mode.\n\nFurthermore, it is possible to enter a budget for how much you want to consume in EUR or kWh per year. The NorthQ eGadget on the screen continuously monitors and updates the electricity consumption data to indicate whether you are under or over budget. You are then able to compare your electricity consumption in the current year with that in previous years. It is also possible to compare the consumption in your current home with other types of homes, e.g. apartments, houses, villas, etc.",
            name: "Description",
          },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0001",
          },
          { text: "NorthQ Power Reader & Power Manager", name: "Name" },
          { text: "NQ-92021", id: "0001", name: "Identifier", type: "0001" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/69/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
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
            label: "Pulse factor",
            max: "1000000",
            min: "10",
            type: "int",
            units: "pulses",
            value: "10000",
            Help: "How many pulses are counted per 10 kWh.",
          },
          {
            genre: "config",
            index: "2",
            label: "Sensor type",
            max: "2",
            min: "1",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help: "Defines the meter type on which the Power Reader is placed",
            Item: [
              { label: "Pulse Meter", value: "1" },
              { label: "Rotating Wheel", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "IR Listen period",
            max: "127",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "Additional time for feedback measurement.Should always be 0.",
          },
          {
            genre: "config",
            index: "4",
            label: "IR Pulse Width",
            max: "127",
            min: "0",
            type: "byte",
            units: "",
            value: "50",
            Help:
              "Adjusts transmit signal so received signal will in average be equal to this values. Auto calibration might select another value than this.",
          },
          {
            genre: "config",
            index: "5",
            label: "Poll / Wake up frequency",
            max: "50",
            min: "1",
            type: "byte",
            units: "seconds",
            value: "20",
            Help:
              "Wake device up this many times per second. This value also controls number of measurements per second on mechanical meters.",
          },
          {
            genre: "config",
            index: "8",
            label: "Wake up interval",
            max: "32767",
            min: "1",
            read_only: "true",
            type: "int",
            units: "seconds",
            value: "900",
            Help:
              "Do not use. Set this value using WAKE_UP_INTERVAL_SET instead.",
          },
          {
            genre: "config",
            index: "9",
            label: "Pulse count",
            max: "2147483647",
            min: "0",
            type: "int",
            units: "pulses/kWh",
            value: "0",
            Help:
              "Current pulse count in device (pulse count / pulse factor = kWh).",
          },
          {
            genre: "config",
            index: "10",
            label: "Keep alive period",
            max: "32767",
            min: "1",
            size: "2",
            type: "short",
            units: "second",
            value: "5",
            Help:
              "set to the number of seconds that it will take the controlling node to send a response / request to the wake up notification",
          },
          {
            genre: "config",
            index: "11",
            label: "Real-time mode",
            max: "32767",
            min: "0",
            type: "int",
            units: "pulses/kWh",
            value: "0",
            Help:
              "Set this to enter real-time mode from remote. Contains seconds * poll frequency before going back to sleep. If you press the button once this value will be set.",
          },
        ],
      },
    ],
  },
};

export default config;
