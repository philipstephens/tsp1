var current_distance = 0;

function initial_route() {
     order[0] = 0;
     order[1] = 1;
     order[2] = 2;
     current_distance = calcDistance(order);
}

function add_city_to_tour(t) {
    var distance;
    var min_distance  = Infinity;
    var temp_order    = order;
    var insert_after  = -1;

    for(var i=0; i < order.length; i++) {
      temp_order.splice(i+1, 0, t)
      distance  = calcDistance(temp_order);

      if(distance < min_distance) {
        insert_after = i;
        min_distance = distance;
      }
      // remove inserted city t
      temp_order.splice(i+1,1);
    }

    // see if swapping before will shorten distance
    if(insert_after >= 0) {order.splice(insert_after+1, 0, t)}
    untie_knot(insert_after, order);
}

function untie_knot(order) {
    swapped = true;

    if(swapped = true) {
      swapped = false;
      for(i=0; i<length-2;i++) {
        city1 = order[t_position];
        city2 = order[t_position+1];
        city3 = order[t_position+2];
        dist_1 = distance_array[city1][city2];
        dist_2 = distance_array[city1][city3];

        if(dist_2 < dist_1) {
            z = order[i+1];
            order[i+1] = order[i+2];
            order[i+2] = z;
            swapped = true;
        }
      }
    }
}

function compute_distance_table() {
    for (var i=0; i < totalCities; i++) {
        distance_array[i] = new Array(totalCities);
    }

    for (var i=0; i < totalCities; i++) {

        for(var j=i; j < totalCities; j++) {
           if(i==j) {
               distance_array[i][j] = Infinity;
           }
           else {
              cityA = cities[i];
              cityB = cities[j];
              d=dist(cityA.x, cityA.y, cityB.x, cityB.y);

              distance_array[i][j] = d;
              distance_array[j][i] = d;
           }
        }
    }
}

function calcDistance(order) {
    var aCity;
    var bCity;
    var d=0;
    for(var i=0; i< order.length-1; i++) {
         aCity = order[i];
         bCity = order[i+1];

         d = d + distance_array[aCity][bCity];
    }

    aCity = bCity;
    bCity = order[0];
    return d + distance_array[aCity][bCity];
}
