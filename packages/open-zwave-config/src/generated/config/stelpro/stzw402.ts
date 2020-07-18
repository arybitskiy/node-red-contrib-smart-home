import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0239:0001:0001",
            name: "OzwInfoPage",
          },
          { text: "images/stelpro/stzw402.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1603/",
            id: "0001",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text:
              "The thermostat may be manually reset to its factory state.\nWhen this is performed, all parameters are reset to their default values and the thermostat is removed (excluded) from the Z-Wave network.\nTo reset the thermostat to its default state:\n- Enter the advanced settings\n- Enter the °STELPRO menu (menu 6)\n- Navigate to the “def” screen using the UP or DOWN buttons.\n- Enter the “def” menu by pressing the UP and DOWN buttons for less than 3 seconds\n- Select “yes” and confirm the selection by pressing the UP and DOWN buttons for less than 3 seconds.\nIf the thermostat was added (included) in a Z-wave network, it will send a ‘’device reset locally’’ notification.\nThe thermostat will then reset itself.\n\nPlease use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          { text: "STZW402+", id: "0001", name: "Identifier", type: "0001" },
          {
            text:
              "Ki, the smart home line-voltage thermostat by Stelpro - STZW402+\n•\tThe very first Z-Wave Plus line voltage thermostat in North America\n•\tSupports 120Vac - 240Vac (50/60 Hz) voltages\n•\tControls baseboard heaters and convectors up to 4000W\n•\tEasy to use 2 button interface\n•\tMade in Canada\n•\tHigh precision temperature control +/- 0.1 °C\n•\tZ-Wave Plus certified, works with thousands of other Z-Wave devices\n•\tBrings optimal comfort into your smart home\n•\tCan be integrated into smart home automated scenes\n•\tLocal keypad lock\n•\tDisplays external temperature\n•\tAdjustable backlight intensity\n•\tComfort and Eco modes\n•\tCelsius or Fahrenheit display\n•\tQuiet TRIAC operation\n•\tFrost-free warning\n•\tSleek design to harmonize with any decor\n•\tBacked by Stelpro’s 30 years of experience as a leader in the heating market",
            name: "Description",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "0001",
          },
          {
            text:
              "Make sure the Z-Wave hub is in the include mode (Refer to your Z-Wave hub instruction manual).\n\nTo add (include) the thermostat to a Z-Wave network, enter the Menu 1 (Z-Wave menu) and select “On”. Then press the UP and DOWN buttons to start the inclusion process. During inclusion, “On” will be blinking and the connectivity icon  will be animated in an increasing pattern. When the inclusion process has been completed, On will be displayed solid. If an error occurs, “Err” will be displayed for 3 seconds then the screen will revert to “Off” selection.",
            name: "InclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1603/INS_STZW402_1215_EN.pdf",
            name: "ProductManual",
          },
          { text: "Ki - Electronic Thermostat for Smart Home", name: "Name" },
          {
            text:
              "Make sure the Z-Wave hub is in the exclude mode (Refer to your Z-Wave hub instruction manual).\nTo remove (exclude) the thermostat from a Z-Wave network, enter the Menu1 (Z-Wave menu) and select “Off”. Then press the UP and DOWN buttons to start the exclusion process. During exclusion, “Off” will be blinking and the connectivity icon  will be animated in an decreasing pattern. When the exclusion process has been completed, Off will be displayed solid. If an error occurs, “Err” will be displayed for 3 seconds then the screen will revert to “On” selection.",
            name: "ExclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1603/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 3,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "1" }],
          },
        ],
      },
      { id: "67", Compatibility: [{ Base: [0] }] },
    ],
  },
};

export default config;
