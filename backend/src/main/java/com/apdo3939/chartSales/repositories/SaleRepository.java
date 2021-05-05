package com.apdo3939.chartSales.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.apdo3939.chartSales.dtos.SalesSuccessDTO;
import com.apdo3939.chartSales.dtos.SalesSumDTO;
import com.apdo3939.chartSales.entities.Sale;

@Repository
public interface SaleRepository extends JpaRepository<Sale, Long> {
	
	@Query("SELECT new com.apdo3939.chartSales.dtos.SalesSumDTO(obj.seller, SUM(obj.amount)) "
			+ " FROM Sale AS obj GROUP BY obj.seller")
	List<SalesSumDTO> amountGroupedBySeller();
	
	@Query("SELECT new com.apdo3939.chartSales.dtos.SalesSuccessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals)) "
			+ " FROM Sale AS obj GROUP BY obj.seller")
	List<SalesSuccessDTO> successGroupedBySeller();

}
