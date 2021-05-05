package com.apdo3939.chartSales.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apdo3939.chartSales.entities.Sale;

@Repository
public interface SaleRepository extends JpaRepository<Sale, Long> {

	

}
