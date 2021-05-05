package com.apdo3939.chartSales.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apdo3939.chartSales.entities.Sale;
import com.apdo3939.chartSales.entities.Seller;

@Repository
public interface SellerRepository extends JpaRepository<Seller, Long> {

	

}
