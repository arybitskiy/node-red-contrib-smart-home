import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/5254:531F:0000",
            name: "OzwInfoPage",
          },
          { text: "images/remotec/zurc.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/174/",
            id: "531F",
            name: "ZWProductPage",
            type: "0000",
          },
          { text: "Z-Wave enabled universal remote control", name: "Name" },
          { text: "Z-URC500US", id: "531F", name: "Identifier", type: "0000" },
          {
            text:
              "The Z-URC™ product line is Remotec’s answer to the increasing demand for RF solutions. By combining our traditional high-quality IR universal remote control expertise with Z-Wave® (RF) technology, we have succeeded in producing home automation remote controls that truly fulfill the role of “One Home, One Remote.” Z-URC’s dual IR/RF capabilities allow you to control virtually any electronic device in your household. Whether it is for simple home electronics, outdoor lighting or that high end home entertainment system, the Z-URC family of solutions can solve your needs. With the Z-URC, you can enjoy the culmination of 20+ years of universal remote control experience.",
            name: "Description",
          },
          {
            text:
              "http://www.remotec.com.hk/zaspx/product_content.aspx?aboutno=9&subaboutno=22&main=f",
            name: "ProductPage",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "531F",
            name: "FrequencyName",
            type: "0000",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/174/xml",
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
        id: "133",
        Associations: [
          {
            num_groups: "16",
            Group: [
              {
                auto: "false",
                index: "1",
                label: "Button1",
                max_associations: "232",
              },
              { index: "2", label: "Button2", max_associations: "232" },
              { index: "3", label: "Button3", max_associations: "232" },
              { index: "4", label: "Button4", max_associations: "232" },
              { index: "5", label: "Button5", max_associations: "232" },
              { index: "6", label: "Button6", max_associations: "232" },
              { index: "7", label: "Button7", max_associations: "232" },
              { index: "8", label: "Button8", max_associations: "232" },
              { index: "9", label: "Button9", max_associations: "232" },
              { index: "10", label: "Button10", max_associations: "232" },
              { index: "11", label: "Button11", max_associations: "232" },
              { index: "12", label: "Button12", max_associations: "232" },
              { index: "13", label: "Button13", max_associations: "232" },
              { index: "14", label: "Button14", max_associations: "232" },
              { index: "15", label: "Button15", max_associations: "232" },
              { index: "16", label: "Button16", max_associations: "232" },
            ],
          },
        ],
      },
      { id: "132", Compatibility: [{ CreateVars: [false] }] },
    ],
  },
};

export default config;
