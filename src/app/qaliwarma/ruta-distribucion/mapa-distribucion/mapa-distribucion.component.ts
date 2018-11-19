import { Component, OnInit } from '@angular/core';
//import * as ol from 'ol'

import OlMap from 'ol/map';
import OlXYZ from 'ol/source/xyz';
import OlTileSource from 'ol/source/tileimage';

import OlView from 'ol/view';

import OlProj from 'ol/proj';

import OlVectorLayer from 'ol/layer/vector';
import OlLayerTile from 'ol/layer/tile';
import VectorSource from 'ol/source/vector';
import OlTransform from 'ol/proj/transforms';
import OlFeature from 'ol/feature';
import OlGeoJSON from 'ol/format/geojson';
import Feature from 'ol/feature';
import Circle from 'ol/geom/circle';
import OlStyleCircle from 'ol/style/circle';
import OlStyleStroke from 'ol/style/stroke';
import OlStyleFill from 'ol/style/fill';
import OlStyleText from 'ol/style/text';
import OlStyleTextPlacement from 'ol/style/textplacement';

import OlStyle from 'ol/style/style';
//  import Layer from 'ol/layer/layer';
//  import Vector from 'ol/layer/vector';

import { isUndefined } from 'util';
import { ActivatedRoute } from '@angular/router';
import { RutaDistribucionService } from '../ruta-distribucion.service';
import tile from 'ol/source/tile';
import { Options } from 'selenium-webdriver/ie';
import style from 'ol/style/style';
import { CrudHttpClientServiceShared } from '../../../shared/servicio/crudHttpClient.service.shared';





@Component({
  selector: 'app-mapa-distribucion',
  templateUrl: './mapa-distribucion.component.html',
  styleUrls: ['./mapa-distribucion.component.css']
})
export class MapaDistribucionComponent implements OnInit {

  public dscruta = '';
  public distribuidor = '';
  public numeroEntrega = 0;


  map: OlMap;
  source: OlXYZ;
  sourceTileImage: OlTileSource;

  view: OlView;

  sub: any;
  id: any;
  vectorSource: any;
  geojsonObject: any;

  image = new OlStyleCircle({
    radius: 3,
    fill: new OlStyleFill({ color: 'red' }),
    stroke: new OlStyleStroke({ color: 'red', width: 1 })

  });

  styles = {
    'Point': new OlStyle({
      image: this.image,
      text: new OlStyleText(),
      geometry: function (feature) {
        let geometry = feature.getGeometry();
        return geometry;
      }
    })
  }

  labelStyle = new OlStyle({
    image: this.image,
    text: new OlStyleText({
      //placement: 'line',
      textAlign : 'left',
      //padding : [0,0,0,10],
      offsetX : 10,
      stroke: new OlStyleStroke({ color: 'red', width: 2 }),
      fill: new OlStyleFill({
        
        color: 'white'
      })
    }),


  })


  constructor(
    private activateRoute: ActivatedRoute, private rutaDistribucionService: RutaDistribucionService, private crudHttpClientServiceShared:CrudHttpClientServiceShared

  ) {

    this.sub = this.activateRoute.params.subscribe(
      params => {

        this.id = params['id'];

      }
    );
  }

  ngOnInit() {

    this.source = new OlXYZ({
      // Tiles from Mapbox (Light)
      url: 'https://api.tiles.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'

    });

    this.sourceTileImage = new OlTileSource({
      projection: 'EPSG:3857',
      wrapX: true,

      //url : 'http://maps.google.de/maps/vt?pb=!1m5!1m4!1i{z}!2i{x}!3i{y}!4i256!2m3!1e0!2sm!3i375060738!3m9!2s${this.language}!3s${this.country.toUpperCase()}!5e18!12m1!1e47!12m3!1e37!2m1!1ssmartmaps!4e0'
      //url: 'http://mt1.google.com/vt/lyrs=s&hl=pl&&x={x}&y={y}&z={z}'
      url: 'http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
    })

    let layerRoad = new OlLayerTile({
      visible: true,
      source: this.sourceTileImage
    })

    let center = OlProj.transform([-76.8993, -5.9228], 'EPSG:4326', 'EPSG:3857');
    this.view = new OlView({
      projection: 'EPSG:3857',
      center: center,
      //center: OlProj.fromLonLat([-77.03111046, -5.93729213]),
      zoom: 10,
    });

    this.map = new OlMap({

      target: 'map',
      layers: [layerRoad],
      view: this.view,
    });

    this.verMapa(this.id);

  }

  styleFunction = function (feature) {
    return this.styles[feature.getGeometry().getType()];
  };

  verMapa(id: string) {

    this.rutaDistribucionService.verMapa(id).subscribe(

      res => {

        console.log(res)

        let geoJsonFormat = new OlGeoJSON(
          {
            defaultDataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:3857'
          }

        );


        this.vectorSource = new VectorSource({
          features: geoJsonFormat.readFeatures(res)
        });


        let st = this.labelStyle;
        let flag = true;
        let oy=5;
        let vectorLayerPoints = new OlVectorLayer({
          source: this.vectorSource,
          visible: true,
          style: function (feature) {
            if(flag){
              oy = 5
              flag = false;
            }else{
              flag = true;
              oy = -5
            }
            st.getText().setOffsetY(oy);
            st.getText().setText(feature.get('codigomodular'));
            
            return st;
          }
        });

     
        this.map.addLayer(vectorLayerPoints);

        this.edit();
      }
    )
  }


  edit(){

    this.crudHttpClientServiceShared.edit(this.id,"rutaDistribucion","edit").subscribe(
      res => {
     
        this.dscruta = res.dscRutaDistribucion;
        this.distribuidor = res.empleadoDistribuidor.nombres;
        this.numeroEntrega = res.numeroEntrega;
       
        
      },
      error=>console.log(error),
      ()=>{
        
      }
    )


  }

}
