import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0063:3031:4C42",
            name: "OzwInfoPage",
          },
          { text: "images/ge/ze26i.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2528/",
            id: "3031",
            name: "ZWProductPage",
            type: "4C42",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2528/39723 EnFrSp QSG v2..pdf",
            name: "ProductManual",
          },
          {
            text:
              "Smart LED light bulb with Z-Wave radio.\n- Control lights remotely and save energy\n- Compatible with smart home systems supporting Z-Wave\n- 60 Watt equivalent light (750 lumens)\n- Consumes only 9 watts of power\n- 2700K soft light with frosted glass \n- Instant ON and fully dimmable\n- Functions as a Z-Wave signal repeater\n- Very simple to include in your network\n- Z-Wave Plus certified",
            name: "Description",
          },
          {
            text:
              "1. Turn off power to the light bulb socket\n2. Follow the network controller instruction to place your network controller into exclusion mode to remove the dt light bulb from the network.\n3. After being prompted by the network controller, turn On power to the light bulb.  If successful, the LED light bulb will flash twice to indicate successful exclusion.",
            name: "ExclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3031",
            name: "FrequencyName",
            type: "4C42",
          },
          {
            text:
              "1. Turn Off power to the light bulb socket\n2. Screw in the light bulb\n3. Place your network controller into inclusion mode by following the controller manufacturer's instructions\n4. Turn On power to the light bulb.  If successful, the LED light bulb will flash twice to indicate successful inclusion.\n5. If the controller/gateway shows it was a fail, repeat the procedure.\n\nNote: If Inclusion still fails after the 2nd attempt, you need to first RESET the dt Smart Bulb before repeating the above steps.",
            name: "InclusionDescription",
          },
          { text: "39723", id: "3031", name: "Identifier", type: "4C42" },
          { text: "Z-Wave LED Light Bulb", name: "Name" },
          {
            text:
              "You may manually reset the light bulb as follows:\n1.  Flick the wall switch “OFF-ON” 4 times within 4 seconds. \n2. The dt Smart Bulb will flash twice after Reset is successful.  \n\nUse this procedure only in the event that the network primary controller is lost or otherwise inoperable.",
            name: "ResetDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1942/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2528/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
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
            label: "Dim level when light is turned ON",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "You may select the dim level whenever the light is turned back ON to be either full brightness (100% dim level) or be the same as the last dim setting when the light is ON by flicking the wall switch",
            Item: [
              { label: "Full brightness", value: "0" },
              { label: "Last brightness setting", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "Dimming/Brightening Step Level",
            max: "99",
            min: "1",
            size: "1",
            type: "byte",
            value: "1",
            Help:
              "\n\t  You may change the dimming step level when you adjust the brightness by your controller/gateway.\n\t  When the value is low, dimming/brightening is gradual.\n\t  When the value is high, dimming/brightening is rapid.\n\t  ",
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Dimming/Brightening Step Timing",
            max: "10",
            min: "1",
            size: "1",
            type: "byte",
            value: "3",
            Help:
              "\n\t  You may change the dimming speed quicker or slower.\n\t  When the value is low, the step timing is quick.\n\t  When the value is high, the step timing is slow.\n\t  ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
