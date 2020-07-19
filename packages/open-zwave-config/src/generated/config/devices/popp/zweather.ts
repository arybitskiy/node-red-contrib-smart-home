import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0154:0400:0100",
            name: "OzwInfoPage",
          },
          { text: "images/popp/zweather.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2102/",
            id: "0400",
            name: "ZWProductPage",
            type: "0100",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2102/POPE005206_en.pdf",
            name: "ProductManual",
          },
          {
            text: "Push the button 3 times within 1.5 seconds.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Hold the button longer than 1.5 seconds and then release.\nThe LED blinks longer than when pressing the button once.\nZ-Weather performs a factory reset and all configuration parameters are reset to their default values. Use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          { text: "Z-Weather", name: "Name" },
          { text: "POPE005206", id: "0400", name: "Identifier", type: "0100" },
          {
            text: "CEPT (Europe)",
            id: "0400",
            name: "FrequencyName",
            type: "0100",
          },
          {
            text:
              "Push the button 3 times within 1.5 seconds. The LED blinks once indicating that Z-Weather is. Z-Weather sends a Z-Wave Wakeup-Notification if has been added to the network. If Z-Weather has not yet been added to the network, no action is performed.",
            name: "WakeupDescription",
          },
          {
            text:
              "Z-Weather is a  multisensor device monitoring outside weather and environmental conditions. It continually measures the wind speed and can, for example, trigger closing of the awning and blinds if it is too windy. It also measures the amount of rotation, enabling calculation of the wind yield per day or per year. In addition, Z-Weather includes sensors for humidity, temperature, pressure and dew point, essentially providing the core sensors of a weather station.\nZ-Weather is powered by a solar cell and stores energy on an internal capacitor, enabling continuous operation, even with no wind for a couple of days. It does not use any batteries and is completely maintenance free. Using the built-in solar cell it also measures the ambient light and the solar yield. This information can be used to turn on the outdoor light at dusk time and turn the light off in the morning.\nZ-Weather‘s wind yield and solar yield metering can be used as a calculation base for planning a wind generator or a solar panel on the roof of a house.",
            name: "Description",
          },
          {
            text:
              "Push the button 3 times within 1.5 seconds. If the LED is not blinking after releasing the button, Z-Weather has not enough energy and must be charged for several hours in bright sunlight.",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2102/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 2,
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
            label: "Wind speed action threshold",
            max: "30",
            min: "0",
            size: "1",
            type: "byte",
            units: "ms",
            value: "6",
            Help:
              "\n\t\t\tCrossing this parameter on the rising edge, Z-Weather sends a basic set to the associated groups, serves the lifeline and sends a wake up notification. \n\t\t\tValid values: 0-30 m/s, where 0 means no notification on too much wind. \n\t\t\tDefault: 6\n\t\t\t",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Twilight action threshold",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            units: "%",
            value: "37",
            Help:
              "\n\t\t\tCrossing this parameter from night to day, association group 3 is informed. \n\t\t\tCrossing this parameter from day to night, association group 4 is informed.\n\t\t\tValid values: 0-100 %, where 0 means off.\n\t\t\tDefault: 37 (street lightning)\n\t\t\t",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "Too much wind", max_associations: "5" },
              { index: "3", label: "Getting bright", max_associations: "5" },
              { index: "4", label: "Getting dark", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
